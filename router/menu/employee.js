export default {
  path: '/employee',
  name: 'employee',
  meta: { title: 'Employees' },
  component: () => import('../../components/employee/employee')
}
