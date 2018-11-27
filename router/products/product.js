export default {
  path: '/products/product',
  name: 'product',
  meta: { title: 'Product' },
  component: () => import('../../components/products/product/product')
}
