import postcssImport from 'postcss-import';
import autoprefixer from 'autoprefixer';
import tailwindcss from '@tailwindcss/postcss';
import cssnano from 'cssnano';

export default ({ env }) => ({
  plugins: [
    postcssImport(),
    tailwindcss(),
    autoprefixer(),
    env === 'production' ? cssnano() : false,
  ].filter(Boolean),
});