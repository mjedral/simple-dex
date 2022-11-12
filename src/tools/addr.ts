export const addr = (address: string) => {
  const head = address.slice(0, 4);
  const tile = address.slice(-4);
  return `${head.toUpperCase()}...${tile.toUpperCase()}`;
};
