import { cd } from '../commands/dir/cd.js';
import { exit } from '../commands/dir/exit.js';
import { getCurrentPath } from '../utils/env.js';
import { logInvalidInput } from '../utils/logs.js';
import { ls } from '../commands/dir/ls.js';
import { up } from '../commands/dir/up.js';
import { cat } from '../commands/file/cat.js';
import { hash } from '../commands/hash/hash.js';

export const onEnter = async (input) => {
  let currentPath = getCurrentPath();

  // folders
  if (input === 'ls') {
    await ls();
  } else if (input === 'up') {
    await up();
  } else if (input.startsWith('cd ')) {
    await cd(input);
  }

  // files
  else if (input.startsWith('cat ')) {
    await cat(input);
  }
  // hash
  else if (input.startsWith('hash ')) {
    await hash(input);
  }
  // system

  // zip

  // other commands
  else if (input === '.exit') {
    await exit();
  }
  
  // invalid input
  else {
    logInvalidInput();
  }
};