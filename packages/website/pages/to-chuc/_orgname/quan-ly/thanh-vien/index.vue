<template>
  <no-ssr>
    <b-container>
      <h1>Danh sách thành viên của tổ chức</h1>
      <b-row class="member-option d-flex my-3">
        <b-col class="md-6 search-member">
          <va-input type="text" placeholder="Tìm kiếm" class="input" />
        </b-col>
        <b-col class="md-6 add-member d-flex">
          <va-button class="btn-add" icon-before="plus" active @click="showCustom">Mời thành viên</va-button>
        </b-col>
      </b-row>
      <b-row v-for="(item,id) in members" :key="id" class="member mt-3 d-flex">
        <b-col class="md-6 info d-flex">
          <img class="member-avatar" :src="item.avatar" />
          <div class="member-detail">
            <div class="member-name">{{item.name}}</div>
            <div class="member-email">{{item.email}}</div>
          </div>
        </b-col>
        <b-col class="md-6 setting d-flex">
          <div v-if="organization.owner && item.id === organization.owner.id">Chủ sở hữu</div>
          <div v-else-if="item.status === 'pending'">Đã mời</div>
          <div v-else>Thành viên</div>
          <va-icon type="ellipsis-h" size="1.25em" class="ml-1" iconStyle="solid" color="#97a0af" />
        </b-col>
      </b-row>
      <b-modal
        title="Mời thành viên mới"
        :backdrop-clickable="backdropClickable"
        ref="inviteModal"
        class="modal-container"
        centered
        hide-footer
      >
        <div class="modal-body pb-2">
          <div class="desc-container d-flex mb-4">
            <img class="organ-avatar" :src="organization.logo" />
            <div class="desc-text">{{ organization.name }}</div>
          </div>
          <div class="form d-flex mb-3">
            <va-input
              type="text"
              v-model="keyword"
              placeholder="Tìm theo tên hoặc email"
              class="input-invite mr-1"
              @confirm="searchUser"
            />
            <va-button
              :disabled="(!activeButton || searching) ? true : false"
              :loading="searching"
              icon-before="search"
              class="btn-invite"
              @click="searchUser"
            >Tìm kiếm</va-button>
          </div>
          <SearchRow
            v-for="user in searchResult"
            :key="`${user.id}_${user.status}`"
            :user="user"
            @invite="inviteUser"
          />
        </div>
      </b-modal>
    </b-container>
  </no-ssr>
</template>

<script>
import { mapGetters } from 'vuex'
import SearchRow from '@/components/organization/members/SearchRow'

export default {
  layout: 'organization',
  middleware: ['auth'],
  head: {
    title: 'Thành viên',
  },
  components: {
    SearchRow,
  },
  data() {
    return {
      backdropClickable: true,
      keyword: '',
    }
  },
  computed: {
    ...mapGetters({
      members: 'organization/members',
      organization: 'organization/organization',
      users: 'search/users',
    }),
    activeButton() {
      return this.keyword !== ''
    },
    searching() {
      return this.$wait.is('search.user')
    },
    searchResult() {
      return this.users.map(user => {
        const idx = this.members.findIndex(member => member.id === user.id)
        if (idx !== -1) {
          const mem = this.members[idx]
          user.status = mem.status
        }
        return user
      })
    },
  },
  mounted() {
    const { orgname } = this.$route.params
    this.$store.dispatch('organization/members', orgname)
  },
  methods: {
    showCustom() {
      this.$refs.inviteModal.show()
    },
    searchUser() {
      this.$store.dispatch('search/user', {
        keyword: this.keyword,
      })
    },
    inviteUser(userId) {
      this.$store.dispatch('organization/invite', {
        user_id: userId,
        organization_id: this.organization.id,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_sizes.scss';
@import '@pubnow/ui/scss/_colors.scss';
@import '@pubnow/ui/scss/_mixins.scss';

.member-option {
  align-items: center;
  .add-member {
    align-items: center;
    justify-content: flex-end;
    .btn-add {
      cursor: pointer;
    }
  }
}

.member {
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  padding-bottom: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
  border-bottom-style: solid;
  .info {
    align-items: center;
    .member-avatar {
      width: 50px;
      height: 50px;
      object-fit: cover;
      border-radius: 25px;
      @include border;
      @include box-shadow-sm;
    }
    .member-detail {
      margin-left: 10px;
      color: #505e77;
      .member-name {
        font-size: 14px;
      }
      .member-email {
        font-size: 13px;
      }
    }
  }
  .setting {
    align-items: center;
    justify-content: flex-end;
    .member-role {
      margin-left: 5px;
      margin-right: 30px;
      color: #505e77;
    }
  }
}

$avatar: 80px;
.modal-body {
  .desc-container {
    flex-direction: column;
    align-items: center;
    .organ-avatar {
      width: $avatar;
      height: $avatar;
      object-fit: cover;
      @include border;
      @include radius-md;
      @include box-shadow-sm;
    }
    .desc-text {
      margin-top: 15px;
      font-size: 25px;
      color: #505e77;
    }
  }
  .form {
    align-items: center;
  }
}
</style>
