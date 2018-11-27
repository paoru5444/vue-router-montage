export default {
  path: '/people',
  name: 'people',
  meta: { title: 'People' },
  component: () => import('../../components/people/people')
}
