<template>
  <va-row :gutter="15">
    <va-column :xs="12" :sm="6" :md="6" class="text-center">
      <div class="d-flex justify-content-between">
        <div class="d-flex align-items-center">
          <img
            :src="avatar ? avatar : 'https://avatars2.githubusercontent.com/u/21233322?s=88&v=4'"
            alt="avatar"
            class="avatar mr-2"
          />
          <div class="align-items-center text-left">
            <p class="text-body font-weight-bold fullname mt-0">{{ fullname }}</p>
            <span class="small">@{{ username }}</span>
          </div>
        </div>
        <va-button type="default" size="xs" class="button" @click="followUser">Theo dõi</va-button>
      </div>
      <va-button type="primary" size="xs" class="button mt-3">Ủng hộ tác giả</va-button>
    </va-column>
    <va-column :xs="12" :sm="6" :md="6">
      <div class="d-flex justify-content-between">
        <nuxt-link to="#" class="text-body font-weight-bold fullname mt-0">{{ category }}</nuxt-link>
        <va-button type="primary" size="xs" class="button" @click="followCategory">Đang theo dõi</va-button>
      </div>
      <p>{{ description }}</p>
    </va-column>
  </va-row>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    fullname: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default: '',
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
  },
  computed: {
    ...mapGetters({
      user: 'auth/user',
    }),
  },
  methods: {
    followUser() {},
    followCategory() {},
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_sizes.scss';

$size-image: 45px;

.avatar {
  width: $size-image;
  height: $size-image;
  border-radius: $size-image / 2;
}

.fullname {
  font-size: $unit * 0.8;
}

.button {
  height: $unit;
}
</style>