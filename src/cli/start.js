import { logHello, logInvalidInput } from '../utils/logs.js';
import { logCurrentPath, setCurrentPath } from '../utils/path.js';
import { update } from './update.js';

export const start = () => {
  const username = findValueInArgv('--username');
  setCurrentPath(process.env.home);

  if (username) {
    process.env.username = username;
    logHello(username);
    logCurrentPath();
  } else {
    logInvalidInput();
  }

  // console.log(process.env);
  update();
};

export const findValueInArgv = (prop) => {
  for (let i = 2; i < process.argv.length; i++) {
    const arg = process.argv[i];
    if (arg.startsWith(prop)) {
      const tempArr = arg.split('=');
      if (tempArr.length === 2) {
        const username = tempArr[1];
        return username;
      }
    }
  }
  return undefined;
};

start();