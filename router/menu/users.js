export default {
  path: '/users',
  name: 'users',
  meta: { title: 'Users' },
  component: () => import('../../components/users/users')
}
