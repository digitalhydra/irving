if (global && 'undefined' === typeof window) {
  const { HOSTNAME, PORT } = process.env;
  global.window = {
    location: {
      host: HOSTNAME && PORT ? `${HOSTNAME}:${PORT}` : 'localhost:3001',
      hostname: HOSTNAME || 'localhost',
    },
  };
}

window.matchMedia = window.matchMedia || (() => ({
  matches: false,
  addListener: () => {},
  removeListener: () => {},
}));
