const { DEV, PROD } = require('./src/server/config/const');
const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/')
    }
  }
};
