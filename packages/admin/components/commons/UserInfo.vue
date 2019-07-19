<template>
  <div class="user-wrapper">
    <div
      v-if="user.avatar"
      class="avatar"
      id="popover-button-open"
      :alt="user.username"
      :style="`background-image: url(${user.avatar})`"
    />
    <img
      v-else
      id="popover-button-open"
      :src="require('@/assets/images/avatar.svg')"
      alt="Pubnow avatar"
    />
    <b-popover target="popover-button-open" :title="user.username">
      <va-button type="subtle-link">View Profile</va-button><br />
      <va-button type="subtle-link" @click="logout">Log out</va-button>
    </b-popover>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Cookie from 'js-cookie'
export default {
  computed: {
    ...mapGetters({
      user: 'auth/user',
    }),
  },
  methods: {
    logout() {
      this.$store.commit('auth/clear')
      this.$router.push('/login')
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
