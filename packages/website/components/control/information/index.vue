<template>
  <div class="d-flex">
    <img :src="org.logo" alt="image oranization" class="avatar mr-3" />
    <div>
      <h2 class="mb-1 title">{{ org.name }}</h2>
      <span>
        <i class="far fa-envelope"></i>
        {{ org.email }}
      </span>
      <div class="mt-1 description">{{ org.description }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      org: 'organization/organization',
    }),
  },
}
</script>


<style lang="scss" scoped>
@import '@pubnow/ui/scss/_mixins.scss';
@import '@pubnow/ui/scss/_colors.scss';

$size-image: 60px;

.avatar {
  @include border;
  @include radius-sm;
  @include box-shadow-sm;
  width: $size-image;
  height: $size-image;
}

.title {
  color: $b500;
}

.description {
  color: $n300;
  font-size: 16px;
  font-weight: 500;
}
</style>
