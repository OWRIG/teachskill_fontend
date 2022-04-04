import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/login', component: '@/pages/login/index' },
    { path: '/register', component: '@/pages/register/index' },
  ],
  fastRefresh: {},
  proxy: {
    '/api': {
      target: 'http://localhost:7001',
      changeOrigin: true
    }
  }
});
