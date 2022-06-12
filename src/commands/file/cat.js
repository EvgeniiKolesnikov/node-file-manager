import { createReadStream } from 'fs';
import { join } from 'path';

import { getCurrentPath } from '../../utils/env.js';
import { logInvalidInput } from '../../utils/logs.js';

export const cat = async (input) => {
  const currentPath = await getCurrentPath();
  let filename = input.split(' ')[1];
  const filePath = join(currentPath, filename);

  const rs = createReadStream(filePath);

  rs.on('error', (err) => {
    logInvalidInput();
  });
  rs.on('data', (data) => {}).pipe(process.stdout);
};