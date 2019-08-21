module.exports = {
  title: 'Pubnow',
  description: 'Publish your content',
  themeConfig: {
    sidebar: {
      '/docs': getUserInterfaceSidebar('Tài liệu'),
    },
    displayAllHeaders: true,
  },
}

function getUserInterfaceSidebar(groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: ['/docs/wiki', '/docs/legal'],
    },
  ]
}
