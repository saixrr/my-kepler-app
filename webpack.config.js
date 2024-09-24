// const path = require('path');

module.exports = {
//   entry: './src/index.js', // Adjust according to your entry point
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'dist'),
//   },
//   // Other configurations...
  resolve: {
    fallback: {
      "querystring": require.resolve("querystring-es3")
    },
  },
}
//   module: {
//     rules: [
//       // Add your loaders here, e.g., babel-loader for JS/JSX
//     ],
//   },
//   plugins: [
//     // Add any plugins you need
//   ],
//   // Additional configurations if necessary...
// };
