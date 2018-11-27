export default {
  path: '/products/product_table',
  name: 'product_table',
  meta: { title: 'Product Table' },
  component: () => import('../../components/products/product_tables/product_table')
}
