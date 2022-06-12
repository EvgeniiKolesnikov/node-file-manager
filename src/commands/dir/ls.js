import { readdir } from 'fs/promises';

import { getCurrentPath } from '../../utils/env.js';
import { logOperationFailed } from '../../utils/logs.js';

// list of directory
export const ls = async () => {
  const currentPath = await getCurrentPath();
  await readdir(currentPath)
    .then((content) => {
      console.log(content);
    })
    .catch((err) => logOperationFailed());
};