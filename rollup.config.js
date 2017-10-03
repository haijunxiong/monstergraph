import babel from 'rollup-plugin-babel';
// import eslint from 'rollup-plugin-eslint';
import resolve from 'rollup-plugin-node-resolve';
// import commonjs from 'rollup-plugin-commonjs';
import global from 'rollup-plugin-node-globals';
import uglify from 'rollup-plugin-uglify';
import replace from 'rollup-plugin-replace';

export default {
  input: 'src/monster.js',
  output: {
    file: 'dist/monstergraph.js',
    format: 'iife',
    name: 'monstergraph',
  },
  sourcemap: true,
  strict: true,
  // moduleContext: {
  //   'src/util/mx_event.js': 'window',
  // },
  plugins: [
    // eslint(),
    resolve({ jsnext: true, main: true }),
    // commonjs({
    //   include: [ 'node_modules/core-js/**' ],
    // }),
    replace({
      ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    global(),
    babel({
      runtimeHelpers: false,
      include: [
        './src/*.js',
        './src/**/*.js',
      ],
      exclude: [],
    }),
    (
      process.env.NODE_ENV === 'production' && uglify({
        compress: {
          evaluate: false,
        },
      })
    ),
  ],
};
