export const exit = async () => {
  const username = process.env.username;
  console.log(`\nThank you for using File Manager, ${username}!\n`);
  process.exit();
};