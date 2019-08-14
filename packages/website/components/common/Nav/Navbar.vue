<template>
  <no-ssr>
    <b-container class="nav-wrapper bg-white">
      <b-row>
        <b-col md="8" class="d-flex align-items-center">
          <nuxt-link to="/">
            <img class="mr-2" :src="require('@/assets/images/logo.svg')" />
          </nuxt-link>
          <div v-if="inOrg" class="org ml-1 pl-1 d-flex align-items-center">
            <img class="logo mr-1" :src="org.logo" />
            <h2 class="name m-0">{{ org.name }}</h2>
          </div>
          <va-input
            v-model="keyword"
            icon="search"
            placeholder="Tìm kiếm"
            iconStyle="solid"
            @confirm="search"
            :class="[{'ml-3 d-lg-block d-none': inOrg}]"
            :width="inOrg ? 'lg' : 'xl'"
          ></va-input>
        </b-col>
        <b-col
          md="4"
          class="d-flex align-items-center justify-content-md-end justify-content-between mt-md-0 mt-2"
        >
          <va-dropdown
            class="order-md-1 notification-dropdown"
            @show="notiShow = true"
            @hide="notiShow = false"
          >
            <div class="bell" slot="trigger">
              <va-icon
                v-if="user"
                type="bell"
                class="icon"
                :iconStyle="notificationNumber > 0 ? 'solid' : 'regular'"
                color="#97a0af"
              />
              <div class="number" v-if="notificationNumber > 0">{{ notificationNumber }}</div>
            </div>
            <Notification :show="notiShow" />
          </va-dropdown>
          <va-dropdown class="order-md-2 order-first">
            <div slot="trigger">
              <va-button
                type="primary"
                class="write-btn ml-md-3 ml-0"
                icon-before="feather-alt"
              >Viết ngay</va-button>
            </div>
            <li>
              <nuxt-link to="/bai-viet/tao-moi">Bài viết</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/series/tao-moi">Series</nuxt-link>
            </li>
          </va-dropdown>

          <UserAvatar :user="user" class="order-md-3" :organizations="organizations" />
        </b-col>
      </b-row>
    </b-container>
  </no-ssr>
</template>

<script>
import { mapGetters } from 'vuex'
import shuffle from 'lodash.shuffle'
import take from 'lodash.take'
import UserAvatar from '../UserAvatar'
import Notification from '../../notification'

export default {
  components: {
    UserAvatar,
    Notification,
  },
  data: () => ({
    keyword: '',
    notiShow: false,
  }),
  computed: {
    ...mapGetters({
      user: 'auth/user',
      categories: 'category/categories',
      organizations: 'organization/organizations',
      org: 'organization/organization',
      notifications: 'notification/notifications',
    }),
    notificationNumber() {
      let result = 0
      if (!this.notifications.length) {
        result = 0
      }
      result = this.notifications.reduce((v, notification) => {
        if (notification.read_at !== null) return v
        return v + 1
      }, 0)

      if (result > 9) {
        return '9+'
      }
      return result
    },
    randomCategories() {
      return take(shuffle(this.categories), 6)
    },
    inOrg() {
      const { orgname } = this.$route.params
      return !!orgname
    },
  },
  methods: {
    search(keyword) {
      this.keyword = ''
      this.$router.push({
        name: 'tim-kiem',
        query: {
          keyword,
        },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_sizes.scss';
@import '@pubnow/ui/scss/_colors.scss';
@import '@pubnow/ui/scss/_mixins.scss';

$logo: 42px;
.nav-wrapper {
  padding: 0.5rem 1rem;
  .org {
    border-left: 1px solid $n40;
    .logo {
      width: $logo;
      height: $logo;
      object-fit: cover;
    }
  }
  .icon {
    font-size: 1.25em !important;
    margin-left: $unit !important;
    cursor: pointer;
  }

  .write-btn {
    &:hover {
      text-decoration: none !important;
    }
    a {
      cursor: pointer;
    }
  }
  .bell {
    position: relative;
    cursor: pointer;
    .number {
      position: absolute;
      right: -8px;
      bottom: -5px;
      font-size: 8px;
      background: $b400;
      width: 15px;
      height: 15px;
      border-radius: 8px;
      color: $white;
      text-align: center;
      line-height: 15px;
      font-weight: 700;
    }
  }
}
</style>
