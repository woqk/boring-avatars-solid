import withSolid from 'rollup-preset-solid';

export default withSolid({
  input: 'src/lib/Avatar.tsx',
  targets: ['esm', 'cjs'],
  output: {exports:"auto"}
});