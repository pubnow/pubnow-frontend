<p align="center">
  <a href="https://getbootstrap.com/">
    <img src="resources/logo.svg" alt="Pubnow logo" width="72" height="72">
  </a>
</p>

<h3 align="center">PUBNOW</h3>

<p align="center">
  Publish your content
</p>

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

### Structure

```bash
├── packages
│   ├── docs/
│   ├── ui/
│   ├── admin/
│   ├── website/
└── resources
    └── logo.svg
```

- `docs` - The documentation, built with Vuepress.
- `ui` - Shared UI Components - Vue.js Components.
- `admin` - The admin control panel frontend, built with Nuxt.js static.
- `website` - The user website frontend, built with Nuxt.js SSR.
