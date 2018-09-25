import { format as error } from 'wool/errors';

import getRegistryConfig from './registry';
import createServer from './server';

async function run(args) {
  const [registryName] = args;
  const config: any = await getRegistryConfig(registryName);
  return createServer(registryName, config.host, config.port).catch(err => {
    const message = [
      error.title('Server error', registryName),
      error.message(err.message || err || 'Unknown error'),
    ].join('\n\n');
    console.error('');
    console.error(message);
  });
}

run(process.argv.slice(2));
