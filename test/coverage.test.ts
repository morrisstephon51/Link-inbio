// Run: node --test test/   (Node 22.18+/23.6+ strips TypeScript types natively)
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { assertCoversPlatforms } from '../agents/content-pipeline/coverage.ts';

const post = (platform: string) => ({ platform, hook: 'h', caption: 'c', hashtags: [] });

test('exact match passes, in any order', () => {
  assert.doesNotThrow(() =>
    assertCoversPlatforms([post('tiktok'), post('instagram')], ['instagram', 'tiktok'])
  );
});

test('a requested platform the model dropped is rejected', () => {
  assert.throws(
    () => assertCoversPlatforms([post('instagram')], ['instagram', 'tiktok']),
    /missing: tiktok/
  );
});

test('an unrequested platform is rejected', () => {
  assert.throws(
    () => assertCoversPlatforms([post('instagram'), post('tiktok'), post('facebook')], ['instagram', 'tiktok']),
    /unrequested: facebook/
  );
});

test('a duplicated platform is rejected even when the count matches', () => {
  assert.throws(
    () => assertCoversPlatforms([post('instagram'), post('instagram')], ['instagram', 'tiktok']),
    /missing: tiktok; duplicated: instagram/
  );
});

test('empty response for a non-empty request is rejected', () => {
  assert.throws(() => assertCoversPlatforms([], ['facebook']), /missing: facebook/);
});

test('run() checks coverage between generation and the Supabase insert', () => {
  const src = readFileSync(new URL('../agents/content-pipeline/index.ts', import.meta.url), 'utf8');
  const gen = src.indexOf('await generatePosts(');
  const check = src.indexOf('assertCoversPlatforms(posts, platforms)');
  const insert = src.indexOf('await insertContentItem(');
  assert.ok(gen > -1 && insert > -1, 'anchors present');
  assert.ok(check > gen && check < insert, 'coverage check must sit after generatePosts and before insertContentItem');
});
