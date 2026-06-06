export type Platform = 'instagram' | 'tiktok' | 'facebook' | 'youtube_shorts';

export interface PostDraft {
  platform: Platform;
  hook: string;
  caption: string;
  hashtags: string[];
}

export interface RemotionPayload {
  title: string;
  hook: string;
  caption: string;
  platform: Platform;
  hashtags: string[];
  durationInFrames: number;
  fps: number;
}

// Matches the content_items table schema exactly
export interface ContentItemRow {
  brand_id: string;
  input_topic: string;
  input_type: 'topic' | 'event';
  text_outputs: {
    posts: PostDraft[];
    brand_voice: string;
  };
  video_outputs: RemotionPayload[];
  tags: string[];
  render_status: 'pending';
  status: 'pending_approval';
}

export interface AgentInput {
  topic: string;
  inputType?: 'topic' | 'event';
  platforms?: Platform[];
  brandVoice?: string;
  brandId?: string;
}
