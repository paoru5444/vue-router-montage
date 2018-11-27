export default {
  path: '/products/stock_current_amount',
  name: 'stock_current_amount',
  meta: { title: 'Stock Current Amount' },
  component: () => import('../../components/products/stock_current_amounts/stock_current_amounts')
}
