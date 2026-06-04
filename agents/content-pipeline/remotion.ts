import type { Platform, PostDraft, RemotionPayload } from './types.js';

const DURATION_BY_PLATFORM: Record<Platform, number> = {
  instagram: 150,       // ~5s at 30fps
  tiktok: 180,          // ~6s at 30fps
  facebook: 150,
  youtube_shorts: 270,  // ~9s at 30fps
};

export function buildRemotionPayloads(posts: PostDraft[], topic: string): RemotionPayload[] {
  return posts.map((post) => ({
    title: topic.slice(0, 80),
    hook: post.hook,
    caption: post.caption,
    platform: post.platform,
    hashtags: post.hashtags,
    durationInFrames: DURATION_BY_PLATFORM[post.platform],
    fps: 30,
  }));
}
