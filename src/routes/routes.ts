import { lazy } from 'react';

const Home = lazy(() => import('features/wallets/index'));

export default [
  {
    path: '/',
    exact: true,
    component: Home,
    title: 'Home',
  },
];
