import { logInvalidInput } from '../utils/logs.js';
import { getCurrentPath } from '../utils/path.js';
import { cd } from './dir/cd.js';
import { exit } from './dir/exit.js';
import { ls } from './dir/ls.js';
import { up } from './dir/up.js';

export const command = async (input) => {
  let currentPath = getCurrentPath();

  if (input === 'ls') {
    await ls();
  }

  if (input === 'up') {
    await up();
  }

  if (input.startsWith('cd ')) {
    await cd(input);
  }

  if (input === '.exit') {
    await exit();
  }

  // logInvalidInput();
};