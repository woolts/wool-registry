import { readJson, woolUrl } from 'wool/utils';

export default registryName => {
  if (!registryName) {
    // TODO: format error
    throw new Error('Expected a registry name');
  }

  const registriesUrl = new URL('./registries/', woolUrl);
  const registryUrl = new URL(`${registryName}/`, registriesUrl);
  const registryConfigUrl = new URL('./registry.json', registryUrl);

  return readJson(registryConfigUrl);
};
