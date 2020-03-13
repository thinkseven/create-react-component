import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser'
import size from 'rollup-plugin-size'

const globals = {
  react: 'React',
}

export default [
  {
    input: 'src/index.js',
    output: {
      name: 'index',
      file: "dist/index.development.js",
      format: 'umd',
      sourcemap: true,
      globals
    },
    plugins: [
      resolve(),
      babel({
        exclude: ['node_modules/**'],
        presets: [
          "react-app"
        ],
        runtimeHelpers: true
      })
    ],
    external: ['react']
  },
  {
    input: 'src/index.js',
    output: {
      name: 'index',
      file: "dist/index.production.min.js",
      format: 'umd',
      sourcemap: true,
      globals,
    },
    plugins: [
      resolve(),
      babel({
        exclude: ['node_modules/**'],
        presets: [
          "react-app"
        ],
        runtimeHelpers: true
      }),
      terser(),
      size({
        writeFile: false,
      }),
    ],
    external: ['react']
  }
];
