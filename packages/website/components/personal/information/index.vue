<template>
  <va-row :gutter="gutter">
    <va-button type="primary">fsdfsfsdfdsfds</va-button>
    <va-column :xs="12" :sm="6" :md="8">
      <div class="test">
        xs: 12, sm: 6, md: 4
      </div>
    </va-column>
    <va-column :xs="12" :sm="6" :md="4">
      <div>
        <va-button type="primary">fsdfsfsdfdsfds</va-button>
      </div>
    </va-column>
  </va-row>
</template>

<style lang="scss" scoped>
.test {
  background: red;
}
</style>
