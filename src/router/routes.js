const routes = [{
  path: '/',
  component: () => import('layouts/MainLayout.vue'),
  children: [{
    path: '',
    component: () => import('pages/Index.vue'),
  },
  {
    path: '/item/:id',
    component: () => import('pages/Item.vue'),
    name: 'Погода на день',
  },
  {
    path: '/graf',
    component: () => import('pages/Graf.vue'),
    name: 'График',
  },
  ],
},
// Always leave this as last one,
// but you can also remove it
{
  path: '/:catchAll(.*)*',
  component: () => import('pages/Error404.vue'),
},
];

export default routes;
