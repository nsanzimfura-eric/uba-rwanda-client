module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
          '@utils': './src/utils',
          '@ui': './src/ui',
          '@api': './src/api',
          '@views': './src/views',
          src: './src/',
          tests: ['./tests/'],
        },
      },
    ],
  ],
};
