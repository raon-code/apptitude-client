// babel.config.js 또는 .babelrc.js
module.exports = function (api) {
  const isDevelopment = api.env('local');

  return {
    presets: [
      // 기타 presets
    ],
    plugins: [
      isDevelopment && require.resolve('react-refresh/babel')
      // 기타 플러그인
    ].filter(Boolean)
  };
};
