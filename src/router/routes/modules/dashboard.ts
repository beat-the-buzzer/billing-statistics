import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/dashboard',
  name: 'Dashboard',
  component: LAYOUT,
  redirect: '/dashboard/analysis',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    title: t('routes.dashboard.dashboard'),
  },
  children: [
    {
      path: 'analysis',
      name: 'Analysis',
      component: () => import('/@/views/dashboard/analysis/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.dashboard.analysis'),
      },
    },
    {
      path: 'query',
      name: 'Query',
      component: () => import('/@/views/dashboard/query/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.dashboard.query'),
      },
    },
    {
      path: 'workbench',
      name: 'Workbench',
      component: () => import('/@/views/dashboard/workbench/index.vue'),
      meta: {
        title: t('routes.dashboard.workbench'),
      },
    },
    {
      path: 'qa',
      name: 'qa',
      component: () => import('/@/views/dashboard/qa/index.vue'),
      meta: {
        title: t('routes.dashboard.qa'),
      },
    },
    {
      path: 'qa-detail',
      name: 'qa-detail',
      component: () => import('/@/views/dashboard/qa/detail.vue'),
      meta: {
        hideMenu: true,
        title: t('routes.dashboard.qaDetail'),
      },
    },
  ],
};

export default dashboard;
