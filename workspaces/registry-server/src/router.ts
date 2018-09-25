import { route, respond } from 'wool-server/router';

export default [
  route('/', () => [], () => 'Hello, World!'),
  route('/packages', () => [], () => 'Packages'),
  route(
    '/packages/#{user}/#{name}/#{version}',
    () => [],
    ({ user, name, version }) =>
      `Requesting package: ${user}/${name}/${version}`,
  ),
];
