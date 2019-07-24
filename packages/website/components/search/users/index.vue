<template>
  <b-row>
    <b-col cols="6" v-for="(user, index) in users" :key="index">
      <user :avatar="user.avatar" :fullname="user.fullname" :follower="user.follower" />
    </b-col>
  </b-row>
</template>

<script>
import User from './user'
export default {
  components: {
    User,
  },
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
}
</script>