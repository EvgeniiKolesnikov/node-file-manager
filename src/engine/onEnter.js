import { cd } from '../commands/dir/cd.js';
import { exit } from '../commands/dir/exit.js';
import { getCurrentPath } from '../utils/env.js';
import { logInvalidInput } from '../utils/logs.js';
import { ls } from '../commands/dir/ls.js';
import { up } from '../commands/dir/up.js';

export const onEnter = async (input) => {
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