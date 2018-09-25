import { sandbox } from 'wool-server/program';

import * as packages from './packages';
import router from './router';

export default (name, host, port) => {
  return sandbox({ router })(port).then(async () => {
    await packages.refresh(name);

    console.log(`Serving wool registry "${name}"`);
    console.log('');
    console.log(`    ${host}:${port}`);
    console.log(`    ${packages.count()} packages`);
    console.log('');
  });
};
