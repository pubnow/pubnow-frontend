module.exports = {
  title: 'PubNow',
  description: 'Publish your content',
  themeConfig: {
    sidebar: {
      '/user-interface/': getUserInterfaceSidebar('Text'),
    },
    displayAllHeaders: true,
  },
}

function getUserInterfaceSidebar(groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: ['', 'text'],
    },
  ]
}
