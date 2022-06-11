import { getCurrentPath } from './env.js';

export const logHello = async (username) => {
  console.log(`Welcome to the File Manager, ${username}!\n`);
};

export const logOperationFailed = async () => {
  console.log('Operation failed');
};

export const logInvalidInput = async () => {
  console.log('Invalid input');
};

export const logCurrentPath = async () => {
  const path = await getCurrentPath();
  console.log(`You are currently in ${path}`);
};