<template>
  <div class="user-wrapper">
    <div class="avatar" :alt="username" :style="`background-image: url(${avatar})`" />
  </div>
</template>

<script>
export default {
  props: {
    avatar: {
      type: String,
      default:
        'https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-9/32789851_1669417253172997_1743328170339205120_n.jpg?_nc_cat=110&_nc_oc=AQkOgwW6A37Y-TeD1CqaloQ4eQ6FnO3GWpjLX7IxdPlvGBmLMbCsYUjds7FC6QQ-HsE&_nc_ht=scontent.fhan2-4.fna&oh=020ca602d2d0ed83ea72bbca4c402984&oe=5DB936D6',
    },
    username: {
      type: String,
      default: 'dacsang97',
    },
  },
}
</script>

<style lang="scss" scoped>
.user-wrapper {
  .avatar {
    width: 36px;
    height: 36px;
    border-radius: 18px;
    background-size: cover;
  }
  .username {
    margin-left: 10px;
  }
}
</style>
