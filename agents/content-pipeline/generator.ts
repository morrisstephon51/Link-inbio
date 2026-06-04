import Anthropic from '@anthropic-ai/sdk';
import type { Platform, PostDraft } from './types.js';

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const PLATFORM_SPECS: Record<Platform, string> = {
  instagram: 'max 2200 chars, 3-5 line caption with line breaks, 10-15 hashtags at end',
  tiktok: 'max 2200 chars, punchy 1-3 line caption, 3-5 hashtags only, hook must be under 5 words',
  facebook: 'max 500 chars, conversational tone, 1-3 hashtags, encourage shares/comments',
  youtube_shorts: 'max 100 chars title style, CTA in caption, 3-5 hashtags, hook is the thumbnail text',
};

const BRAND_VOICE_DEFAULT =
  'Community-first, Gen Z tone, AI education focus for underserved Chicago south suburban communities. Real, direct, no corporate speak. Make people feel seen and empowered.';

export async function generatePosts(
  topic: string,
  platforms: Platform[],
  brandVoice: string = BRAND_VOICE_DEFAULT
): Promise<PostDraft[]> {
  const platformDetails = platforms
    .map((p) => `- ${p}: ${PLATFORM_SPECS[p]}`)
    .join('\n');

  const prompt = `You are a social media content strategist for The Plug AI, a community-first AI education initiative serving underserved Chicago south suburban communities.

Brand voice: ${brandVoice}

Topic/Event: ${topic}

Generate platform-specific social media posts for these platforms:
${platformDetails}

Rules:
- Hooks must be scroll-stopping and specific to the topic — no generic openers
- Hashtags must be semantically derived from the topic only — no trending tags you cannot verify from the topic text
- Captions must match each platform's native culture and length
- Never use corporate jargon or AI buzzwords without context
- Always center the community benefit

Return ONLY a valid JSON array with this exact shape, no markdown:
[
  {
    "platform": "<platform>",
    "hook": "<hook text>",
    "caption": "<full caption>",
    "hashtags": ["<tag>", ...]
  }
]`;

  const response = await client.messages.create({
    model: 'claude-sonnet-4-5',
    max_tokens: 2048,
    messages: [{ role: 'user', content: prompt }],
  });

  const text = response.content[0].type === 'text' ? response.content[0].text : '';

  let posts: PostDraft[];
  try {
    posts = JSON.parse(text);
  } catch {
    const jsonMatch = text.match(/\[[\s\S]*\]/);
    if (!jsonMatch) throw new Error(`Claude did not return valid JSON:\n${text}`);
    posts = JSON.parse(jsonMatch[0]);
  }

  return posts;
}
