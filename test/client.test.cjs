const assert = require('node:assert/strict');
const test = require('node:test');
const { normalizeResult, prepareRequest } = require('../dist/src/lib/client.js');
const { endpoints } = require('../dist/src/lib/contracts.js');

test('every published action resolves to a bounded Ace API operation', () => {
  for (const [name, endpoint] of Object.entries(endpoints)) {
    assert.match(endpoint.path, /^\/[a-z0-9/_{}-]+$/i, name);
    assert.ok(['GET', 'POST', 'DELETE', 'PATCH', 'PUT'].includes(endpoint.method), name);
  }
});

test('an outer pending task hides preview media and nested success', () => {
  const result = normalizeResult({ finished_at: null, response: { state: 'succeeded', data: [{ video_url: 'https://example.com/preview.mp4' }] } }, 'same-task', { retrieved: true });
  assert.equal(result.status, 'pending');
  assert.deepEqual(result.media_urls, []);
});

test('a completed task returns only final media and removes routing fields', () => {
  const result = normalizeResult({ finished_at: '2026-10-12T00:00:00Z', response: JSON.stringify({ state: 'completed', data: [{ image_url: 'https://example.com/final.png', supplier: 'internal' }] }) }, 'same-task', { retrieved: true });
  assert.equal(result.status, 'succeeded');
  assert.deepEqual(result.media_urls, ['https://example.com/final.png']);
  assert.equal(JSON.stringify(result).includes('internal'), false);
});

test('failure cannot be treated as successful preview media', () => {
  const result = normalizeResult({ response: { state: 'failed', error: { message: 'private detail' }, image_url: 'https://example.com/preview.png' } }, 'same-task', { retrieved: true });
  assert.equal(result.status, 'failed');
  assert.deepEqual(result.media_urls, []);
  assert.equal(JSON.stringify(result).includes('private detail'), false);
});

test('Seedream generation uses async without a fake callback and validates required prompt', () => {
  const prepared = prepareRequest('seedream_generate_image', { prompt: 'Sunrise' });
  assert.equal(prepared.path, '/seedream/images');
  assert.equal(prepared.body.async, true);
  assert.equal(prepared.body.callback_url, undefined);
  assert.throws(() => prepareRequest('seedream_generate_image', {}), /prompt|required|Invalid/);
});

test('Seedream can return partial media without claiming full success', () => {
  const result = normalizeResult({ finished_at: '2026-10-12T00:00:00Z', response: { data: [{ state: 'succeeded', image_url: 'https://example.com/one.png' }, { state: 'failed', error: 'failed' }] } }, 'same-task', { retrieved: true, partialAllowed: true });
  assert.equal(result.status, 'partial');
  assert.equal(result.success, false);
  assert.deepEqual(result.media_urls, ['https://example.com/one.png']);
});

test('public contract examples prepare the documented request', () => {
  const examples = require('./contract-examples.json');
  for (const example of examples) {
    const prepared = prepareRequest(example.tool, example.inputs);
    assert.equal(prepared.method, example.method, example.name);
    assert.equal(prepared.path, example.path, example.name);
    for (const [key, value] of Object.entries(example.body || {})) {
      assert.deepEqual(prepared.body[key], value, `${example.name}: ${key}`);
    }
  }
});
