export default async function({ route, store }) {
  const { orgname } = route.params
  await store.dispatch('organization/show', orgname)
}
