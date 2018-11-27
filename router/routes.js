import paths from './paths'
import functions from "./menu/functions";
const routes = [
  {
    path: '/login',
    component: () => import('src/pages/login.vue'),
  },
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      paths.people,
      paths.functions,
      paths.price_tables,
      paths.types_categories,
      paths.products_categories,
      paths.employee,
      paths.stock_current_amount,
      paths.product,
      paths.product_table,
      paths.clients,
      paths.companies,
      paths.suppliers,
      paths.devices,
      paths.product_supplier,
      paths.products_input_output,
      paths.stock_types_input_output,
      paths.users
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
