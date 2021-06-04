import { defineConfig } from 'umi';
import proxy from './proxy';

const { REACT_APP_ENV, NODE_ENV } = process.env;

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  hash: true,

  targets: {
    ie: 11,
  },
  base: NODE_ENV === 'production' ? '/storebscreen/' : '/',
  publicPath: NODE_ENV === 'production' ? '/storebscreen/' : '/',
  favicon: 'https://oa.qdama.cn/favicon.ico',
  define: {
    REACT_APP_ENV,
    NODE_ENV,
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    // { path: '/login', component: '@/pages/user/login' },
  ],

  // @ts-ignore
  proxy: proxy['dev'],
  extraPostCSSPlugins: [require('tailwindcss'), require('autoprefixer')],
});
