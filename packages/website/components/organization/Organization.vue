<template>
  <div class="org-wrapper mt-4">
    <div class="left">
      <img :src="org.logo" :alt="`Tổ chức ${org.name}`" class="logo" />
    </div>
    <div class="right">
      <div class="top">
        <nuxt-link class="title" :to="`/to-chuc/${org.slug}`">
          <h2>{{ org.name }}</h2>
        </nuxt-link>

        <va-button v-if="org.active" @click="goSetting">
          <va-icon type="cog"></va-icon>
        </va-button>
        <va-badge v-else>Chờ duyệt</va-badge>
      </div>
      <div class="description">{{ org.description }}</div>
      <div class="owner">
        Thành lập bởi
        <img :src="org.owner.avatar" />
        {{ org.owner.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    org: {
      type: Object,
      required: true,
    },
    isOwner: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    goSetting() {
      this.$router.push('/to-chuc/' + this.org.slug + '/quan-ly')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_sizes.scss';
@import '@pubnow/ui/scss/_colors.scss';
@import '@pubnow/ui/scss/_mixins.scss';

$logo: 80px;

.org-wrapper {
  @include border;
  @include radius-md;
  @include box-shadow-sm;
  padding: $unit / 2;
  display: flex;
  .left {
    .logo {
      width: $logo;
      height: $logo;
      object-fit: cover;
      margin-right: $unit / 2;
      @include border;
      @include radius-md;
    }
  }
  .right {
    width: 100%;
    .top {
      display: flex;
      align-items: center;
      height: 34px;
      .title {
        margin-bottom: 0;
        margin-right: auto;
        overflow: hidden;
        text-overflow: ellipsis;

        h2 {
          color: $b500 !important;
          font-size: 19px;
          line-height: 19px;
          max-height: 19px;
          word-break: break-word;
        }
        &:hover {
          text-decoration: none;
        }
      }
    }
    .description {
      font-size: 16px;
      color: $n400;
    }
    .owner {
      margin-top: $unit / 4;
      color: $n300;
      img {
        width: $unit;
        height: $unit;
        border-radius: $unit / 2;
      }
    }
  }
}
</style>
