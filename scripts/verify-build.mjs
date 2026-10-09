import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = path.join(root, 'dist/apps/web/client');
const publicDir = path.join(root, 'apps/web/public');

async function verifyPublicFiles(directory, relative = '') {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const name = path.join(relative, entry.name);
    if (entry.isDirectory()) {
      await verifyPublicFiles(path.join(directory, entry.name), name);
    } else {
      assert.deepEqual(
        await readFile(path.join(output, name)),
        await readFile(path.join(publicDir, name)),
        `Build is missing or has changed public file: ${name}`,
      );
    }
  }
}

const html = await readFile(path.join(output, 'index.html'), 'utf8');
const assets = [...html.matchAll(/(?:src|href)="(\/assets\/[^"?#]+)"/g)];
assert(assets.length > 0, 'No compiled assets found in index.html');
for (const [, asset] of assets) {
  assert((await stat(path.join(output, asset.slice(1)))).isFile(), `Missing asset: ${asset}`);
}
await verifyPublicFiles(publicDir);
const imageData = await readFile(path.join(root, 'apps/web/src/data/story-images.ts'), 'utf8');
for (const [, image] of imageData.matchAll(/"src":\s*"(\/images\/story\/[^"?]+)"/g)) {
  assert((await stat(path.join(output, image.slice(1)))).isFile(), `Missing story image: ${image}`);
}
console.log('Upload files verified: index.html, compiled assets, public files, and story images.');
