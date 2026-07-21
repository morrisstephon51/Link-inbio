import 'dotenv/config';
import { generatePosts } from './generator.js';
import { buildRemotionPayloads } from './remotion.js';
import { insertContentItem } from './supabase.js';
import type { AgentInput, ContentItemRow, Platform, PostDraft } from './types.js';

const ALL_PLATFORMS: Platform[] = ['instagram', 'tiktok', 'facebook', 'youtube_shorts'];

// Default brand: The Plug AI
const DEFAULT_BRAND_ID = 'e47a6396-8a4e-4dcf-a511-b9f3878ef398';

const DEFAULT_BRAND_VOICE =
  'Community-first, Gen Z tone, AI education focus for underserved Chicago south suburban communities. Real, direct, no corporate speak. Make people feel seen and empowered.';

function printDivider(label: string) {
  console.log(`\n${'─'.repeat(62)}`);
  console.log(`  ${label}`);
  console.log('─'.repeat(62));
}

function printPostPreview(post: PostDraft) {
  printDivider(`📱 ${post.platform.toUpperCase()}`);
  console.log(`HOOK:    ${post.hook}`);
  console.log(`CAPTION: ${post.caption.slice(0, 140)}${post.caption.length > 140 ? '…' : ''}`);
  console.log(`TAGS:    ${post.hashtags.join(' ')}`);
}

async function run(input: AgentInput) {
  const platforms = input.platforms ?? ALL_PLATFORMS;
  const brandVoice = input.brandVoice ?? DEFAULT_BRAND_VOICE;
  const brandId = input.brandId ?? DEFAULT_BRAND_ID;
  const inputType = input.inputType ?? 'topic';

  console.log('\n🚀 Content Pipeline Agent starting...');
  console.log(`   Topic:     ${input.topic}`);
  console.log(`   Platforms: ${platforms.join(', ')}`);
  console.log(`   Brand ID:  ${brandId}`);

  // 1. Generate posts via Claude
  console.log('\n⚙️  Generating posts via Claude...');
  const posts = await generatePosts(input.topic, platforms, brandVoice);

  // 2. Build Remotion payloads
  const remotionPayloads = buildRemotionPayloads(posts, input.topic);

  // 3. Derive tags from all hashtags (deduplicated)
  const allTags = [...new Set(posts.flatMap((p) => p.hashtags))];

  // 4. Build content_items row
  const row: ContentItemRow = {
    brand_id: brandId,
    input_topic: input.topic,
    input_type: inputType,
    text_outputs: { posts, brand_voice: brandVoice },
    video_outputs: remotionPayloads,
    tags: allTags,
    render_status: 'pending',
    status: 'pending_approval',
  };

  // 5. Insert to Supabase
  console.log('💾 Inserting to content_items...');
  const insertedId = await insertContentItem(row);

  // 6. Print previews
  posts.forEach(printPostPreview);

  printDivider('✅ Done');
  console.log(`   Supabase content_items.id: ${insertedId}`);
  console.log(`   ${posts.length} platform posts queued — status: pending_approval`);
  console.log(`   ${remotionPayloads.length} Remotion payloads attached to video_outputs`);
  console.log('');
}

// ── CLI entry ────────────────────────────────────────────────────────────────
const args = process.argv.slice(2);
if (args.length === 0) {
  console.error('\nUsage:');
  console.error('  npx ts-node agents/content-pipeline/index.ts "<topic>"');
  console.error('  npx ts-node agents/content-pipeline/index.ts "<topic>" [platforms] [event|topic]');
  console.error('\nExamples:');
  console.error('  npx ts-node agents/content-pipeline/index.ts "We just launched free AI workshops in Harvey, IL"');
  console.error('  npx ts-node agents/content-pipeline/index.ts "AI literacy workshop" "instagram,tiktok" event');
  process.exit(1);
}

const VALID_PLATFORMS = new Set<string>(ALL_PLATFORMS);
const requestedPlatforms = args[1] ? args[1].split(',') : [];
const invalidPlatforms = requestedPlatforms.filter((p) => !VALID_PLATFORMS.has(p));
if (invalidPlatforms.length > 0) {
  console.error(`\n❌ Invalid platform(s): ${invalidPlatforms.join(', ')}`);
  console.error(`   Valid platforms: ${ALL_PLATFORMS.join(', ')}`);
  process.exit(1);
}

const input: AgentInput = {
  topic: args[0],
  platforms: requestedPlatforms.length > 0 ? (requestedPlatforms as Platform[]) : undefined,
  inputType: (args[2] as 'topic' | 'event') ?? 'topic',
};

run(input).catch((err) => {
  console.error('\n❌ Agent failed:', err.message);
  process.exit(1);
});
