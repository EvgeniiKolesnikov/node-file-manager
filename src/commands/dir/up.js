import { readdir } from 'fs/promises';

import { getCurrentPath, setCurrentPath } from '../../utils/env.js';

// up directory
export const up = async () => {
  const currentPath = await getCurrentPath();

  const osSeparator = currentPath.indexOf('/') === -1 ? '\\' : '/';
  const splittedPath = currentPath.split(osSeparator);
  const startPath = splittedPath[0] + osSeparator;
  const newPath = startPath + splittedPath.slice(1, -1).join(osSeparator);

  // check valid path
  await readdir(newPath)
    .then((content) => {
      setCurrentPath(newPath);
    })
    .catch((err) => logInvalidInput());
};