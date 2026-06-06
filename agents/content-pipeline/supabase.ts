import { createClient } from '@supabase/supabase-js';
import type { ContentItemRow } from './types.js';

function getClient() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_ANON_KEY;
  if (!url || !key) {
    throw new Error('Missing SUPABASE_URL or SUPABASE_ANON_KEY in environment');
  }
  return createClient(url, key);
}

export async function insertContentItem(row: ContentItemRow): Promise<string> {
  const supabase = getClient();
  const { data, error } = await supabase
    .from('content_items')
    .insert(row)
    .select('id')
    .single();

  if (error) throw new Error(`Supabase insert failed: ${error.message}`);
  return data.id as string;
}
