import { findValueInArgv } from '../utils/argv.js';
import { logHello, logInvalidInput, logCurrentPath } from '../utils/logs.js';
import { setCurrentPath, setUsername } from '../utils/env.js';
import { update } from './update.js';

export const start = () => {
  const username = findValueInArgv('--username');
  
  if (username) {
    setCurrentPath(process.env.home);
    setUsername(username);
    logHello(username);
    logCurrentPath();
    update();
  } else {
    logInvalidInput();
  }
};

start();