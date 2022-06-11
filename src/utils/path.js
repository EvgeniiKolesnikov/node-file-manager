export const setCurrentPath = async (path) => {
  process.env.currentPath = path;
};

export const getCurrentPath = async () => {
  return process.env.currentPath;
};

export const logCurrentPath = async () => {
  const path = await getCurrentPath();
  console.log(`You are currently in ${path}`);
};