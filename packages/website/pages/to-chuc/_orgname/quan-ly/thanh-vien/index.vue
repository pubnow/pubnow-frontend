<template>
  <no-ssr>
    <b-container>
      <h1>Danh sách thành viên của tổ chức</h1>
      <b-row class="member-option d-flex my-3">
        <b-col class="md-6 search-member">
          <va-input type="text" placeholder="Tìm kiếm" class="input" />
        </b-col>
        <b-col class="md-6 add-member d-flex">
          <va-button class="btn-add" type="success" @click="showCustom">Thêm thành viên</va-button>
        </b-col>
      </b-row>
      <b-row v-for="(item,id) in member" :key="id" class="member mt-3 d-flex">
        <b-col class="md-6 info d-flex">
          <img class="member-avatar" :src="item.avatar" />
          <div class="member-detail">
            <div class="member-name">{{item.name}}</div>
            <div class="member-email">{{item.email}}</div>
          </div>
        </b-col>
        <b-col class="md-6 setting d-flex">
          <va-icon type="user" size="1.25em" iconStyle="regular" color="#97a0af" />
          <div class="member-role">{{item.role}}</div>
          <va-icon type="cog" size="1.25em" iconStyle="solid" color="#97a0af" />
        </b-col>
      </b-row>
      <va-modal :backdrop-clickable="backdropClickable" ref="customModal" class="modal-container">
        <div slot="body">
          <div class="modal-body">
            <div class="desc-container d-flex mb-5">
              <img
                class="organ-avatar"
                src="https://avatars0.githubusercontent.com/u/49083246?s=200&v=4"
              />
              <div class="desc-text">Mời thành viên mới đến nhóm Young Tailor</div>
            </div>
            <div class="form d-flex">
              <va-input
                type="text"
                v-model="inputWidth"
                placeholder="Tìm theo tên hoặc email"
                class="input-invite"
                @change="onHanldeFindUser"
              />
              <va-button
                :type="`${activeButton?'success':'default'}`"
                :disabled="activeButton ? false : true"
                class="btn-invite"
              >Mời</va-button>
            </div>
          </div>
        </div>
        <div slot="footer" />
      </va-modal>
    </b-container>
  </no-ssr>
</template>

<script>
export default {
  middleware: ['auth'],
  head: {
    title: 'Thành viên',
  },
  data() {
    return {
      member: [
        {
          avatar: 'https://avatars2.githubusercontent.com/u/21234122?s=96&v=4',
          name: 'PhongPV',
          email: 'phong@gmail.com',
          role: 'Quản trị viên',
        },
        {
          avatar: 'https://avatars2.githubusercontent.com/u/21234772?s=96&v=4',
          name: 'TuanPV',
          email: 'tuan@gmail.com',
          role: 'Thành viên',
        },
        {
          avatar: 'https://avatars2.githubusercontent.com/u/21234222?s=96&v=4',
          name: 'SangND',
          email: 'sang@gmail.com',
          role: 'Thành viên',
        },
        {
          avatar: 'https://avatars2.githubusercontent.com/u/24434122?s=96&v=4',
          name: 'TuNR',
          email: 'tu@gmail.com',
          role: 'Thành viên',
        },
        {
          avatar: 'https://avatars2.githubusercontent.com/u/21244122?s=96&v=4',
          name: 'ManhTT',
          email: 'manh@gmail.com',
          role: 'Thành viên',
        },
      ],
      backdropClickable: true,
      activeButton: false,
      inputWidth: '',
    }
  },
  methods: {
    showCustom() {
      this.$refs.customModal.open()
    },
    onHanldeFindUser() {
      if (this.inputWidth === '') {
        this.activeButton = false
      } else {
        this.activeButton = true
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_sizes.scss';
@import '@pubnow/ui/scss/_colors.scss';

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
      object-fit: stretch;
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

.modal-container {
  .modal-body {
    .desc-container {
      flex-direction: column;
      align-items: center;
      .organ-avatar {
        width: 60px;
      }
      .desc-text {
        margin-top: 15px;
        font-size: 25px;
        color: #505e77;
      }
    }
    .form {
      align-items: center;
      .input-invite {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
      .btn-invite {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        padding: 0 20px;
      }
    }
  }
}
</style>