const { DEV, PROD } = require('@/server/config/const');
const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/')
    }
  },
  babel: {
    plugins: [
      ...(process.env.NODE_ENV !== DEV && process.env.NODE_ENV !== PROD
        ? ['react-refresh/babel']
        : [])
    ]
  }
};
