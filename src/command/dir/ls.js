import { readdir } from 'fs/promises';
import { logOperationFailed } from '../../utils/logs.js';
import { getCurrentPath } from '../../utils/path.js';

// list of directory
export const ls = async () => {
  const currentPath = await getCurrentPath();
  await readdir(currentPath)
    .then((content) => {
      console.log(content);
    })
    .catch((err) => logOperationFailed());
};