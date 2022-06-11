export const setCurrentPath = async (path) => {
  process.env.currentPath = path;
};

export const getCurrentPath = async () => {
  return process.env.currentPath;
};

export const setUsername = async (name) => {
  process.env.username = name;
};

export const getUsername = async () => {
  return process.env.username;
};