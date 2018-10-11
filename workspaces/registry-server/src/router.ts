import * as path from 'path';
import { readFile, woolUrl } from 'wool/utils';
import { header, route, status } from 'wool-server/router';

import * as packages from './packages';

export default [
  route('/', () => 'Hello, World!'),
  route('/packages', () => 'Packages'),
  route('/packages/{user}/{name}', packageIndex),
  route('/packages/{user}/{name}/{version}', packageVersion),
  route('/packages/{user}/{name}/{version}/bundle', bundle),
];

function packageIndex(params) {
  const versions = packages.findVersions(params.user, params.name);

  if (versions.length === 0) {
    return {
      attrs: [status(404)],
      body: '',
    };
  }

  return JSON.stringify({ versions });
}

function packageVersion(params) {
  const found = packages.find(params.user, params.name, params.version);

  if (!found) {
    return {
      attrs: [status(404)],
      body: '',
    };
  }

  // TODO: read package wool.json
  return JSON.stringify({
    name: `${params.user}/${params.name}`,
    version: params.version,
    entry: 'src/index.ts',
    size: 1234,
  });
}

async function bundle(params) {
  const found = packages.find(params.user, params.name, params.version);

  if (!found) {
    return {
      attrs: [status(404)],
      body: '',
    };
  }

  const bundleName = `${params.user}_${params.name}_${params.version}.tar.gz`;

  return readFile(
    new URL(path.join('registries', 'example', 'bundles', bundleName), woolUrl),
  )
    .then(data => ({
      attrs: [header('Content-Type', 'application/gzip')],
      body: data,
    }))
    .catch(err => ({
      // This error should be 5xx, not a 404
      attrs: [status(404)],
      body: '',
    }));
}
