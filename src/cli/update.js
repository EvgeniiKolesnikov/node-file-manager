import * as readline from 'readline';
import { command } from '../command/command.js';
import { logCurrentPath } from '../utils/path.js';
import { exit } from '../command/dir/exit.js';

export const update = async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on('line', (input) => {
    command(input).then(() => logCurrentPath());
  });

  rl.on('SIGINT', () => {
    exit();
  });
};