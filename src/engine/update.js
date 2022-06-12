import { createInterface } from 'readline';

import { exit } from '../commands/dir/exit.js';
import { logCurrentPath } from '../utils/logs.js';
import { onEnter } from './onEnter.js';

export const update = async () => {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on('line', (input) => {
    onEnter(input).then(() => logCurrentPath());
  });

  rl.on('SIGINT', () => {
    exit();
  });
};