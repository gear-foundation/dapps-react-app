const ADDRESS = {
  NODE: import.meta.env.VITE_NODE_ADDRESS as string,
};

console.log('ADDRESS: ', ADDRESS);

const LOCAL_STORAGE = {
  ACCOUNT: 'account',
  WALLET: 'wallet',
};

export { ADDRESS, LOCAL_STORAGE };
