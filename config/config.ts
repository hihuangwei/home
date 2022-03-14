import { defineConfig } from 'umi';

export default defineConfig({
  hash: true,
  title: false,
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/pages/home/index'
    },
  ],
  targets: {
    ie: 11,
  },
  theme: {
    "primary-color": "#d80c18",
  },
  manifest: {
    basePath: '/',
  },
  fastRefresh: {},
  webpack5: {},
});
