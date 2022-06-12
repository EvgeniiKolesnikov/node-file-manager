import { join } from 'path';
import { readdir } from 'fs/promises';

import { getCurrentPath, setCurrentPath } from '../../utils/env.js';
import { logInvalidInput } from '../../utils/logs.js';

// go to path
export const cd = async (input) => {
  const currentPath = await getCurrentPath();
  let targetPath = input.split(' ')[1];

  if (!targetPath.includes('\\') && !targetPath.includes('/')) {
    targetPath = join(currentPath, targetPath);
  }

  // check valid path
  await readdir(targetPath)
    .then((content) => {
      setCurrentPath(targetPath);
    })
    .catch((err) => logInvalidInput());
};