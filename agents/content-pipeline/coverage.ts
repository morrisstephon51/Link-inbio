import type { Platform } from './types.js';

// The model is asked for exactly one post per requested platform, but nothing
// forced it to comply: a dropped platform, an unrequested extra, or a duplicate
// was stored as a complete pending_approval row and the CLI reported success.
// Run this after generation and BEFORE the Supabase insert so a non-compliant
// response fails loudly instead of persisting a partial set (issue #20).
export function assertCoversPlatforms(
  posts: ReadonlyArray<{ platform?: unknown } | null | undefined>,
  requested: ReadonlyArray<Platform>
): void {
  const want = new Set<string>(requested);
  const seen = new Set<string>();
  const extra: string[] = [];
  const dupes: string[] = [];

  for (const post of posts) {
    const p = String(post?.platform);
    if (!want.has(p)) extra.push(p);
    else if (seen.has(p)) dupes.push(p);
    seen.add(p);
  }
  const missing = [...want].filter((p) => !seen.has(p));

  if (missing.length || extra.length || dupes.length) {
    const parts: string[] = [];
    if (missing.length) parts.push(`missing: ${missing.join(', ')}`);
    if (extra.length) parts.push(`unrequested: ${extra.join(', ')}`);
    if (dupes.length) parts.push(`duplicated: ${dupes.join(', ')}`);
    throw new Error(
      `Claude's posts do not match the requested platforms (${parts.join('; ')}). ` +
        `Requested: ${requested.join(', ')}. Nothing was saved.`
    );
  }
}
