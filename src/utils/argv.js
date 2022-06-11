export const findValueInArgv = (prop) => {
  for (let i = 2; i < process.argv.length; i++) {
    const arg = process.argv[i];
    if (arg.startsWith(prop)) {
      const tempArr = arg.split('=');
      if (tempArr.length === 2) {
        const value = tempArr[1];
        return value;
      }
    }
  }
  return undefined;
};