import * as fs from 'fs';
import * as path from 'path';
import * as util from 'util';

const readFile = util.promisify(fs.readFile);

const woolUrl = new URL(`file://${process.env.WOOL_PATH}/`);
const registriesUrl = new URL('./registries/', woolUrl);

let packages = {};

export function list() {
  return packages;
}

export function count() {
  return Object.keys(packages).length;
}

export function findVersions(user, name) {
  const found = packages[path.join(user, name)];

  if (!found) {
    return [];
  }

  return found.versions || [];
}

export function find(user, name, version) {
  const found = packages[path.join(user, name)];

  if (!found) {
    return false;
  }

  if (!found.versions.includes(version)) {
    return false;
  }

  return true;
}

export async function refresh(dir) {
  const packagesPath = new URL(path.join(dir, 'packages.json'), registriesUrl);
  packages = await readFile(packagesPath).then(buffer =>
    JSON.parse(buffer.toString()),
  );
}
