<template>
  <no-ssr>
    <b-container>
      <h1>Danh sách thành viên của tổ chức</h1>
      <b-row class="member-option d-flex">
        <b-col class="md-6 search-member">
          <input type="text" placeholder="Tìm kiếm" class="input" />
        </b-col>
        <b-col class="md-6 add-member d-flex">
          <div class="btn-add-member">Thêm thành viên</div>
        </b-col>
      </b-row>
      <b-row v-for="(item,id) in member" :key="id" class="member d-flex">
        <b-col class="md-6 info d-flex">
          <img class="member-avatar" :src="item.avatar" />
          <div class="member-detail">
            <div class="member-name">{{item.name}}</div>
            <div class="member-email">{{item.email}}</div>
          </div>
        </b-col>
        <b-col class="md-6 setting d-flex">
          <va-icon type="user" size="1.25em" iconStyle="regular" color="#97a0af" />
          <div class="member-role">Thành viên</div>
          <va-icon type="cog" size="1.25em" iconStyle="solid" color="#97a0af" />
        </b-col>
      </b-row>
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
          avatar:
            'http://www.titikshapublicschool.com/wp-content/uploads/2018/11/developer-api.jpg',
          name: 'PhongPV',
          email: 'phong@gmail.com',
        },
        {
          avatar:
            'http://www.titikshapublicschool.com/wp-content/uploads/2018/11/developer-api.jpg',
          name: 'TuanPV',
          email: 'tuan@gmail.com',
        },
        {
          avatar:
            'http://www.titikshapublicschool.com/wp-content/uploads/2018/11/developer-api.jpg',
          name: 'SangND',
          email: 'sang@gmail.com',
        },
        {
          avatar:
            'http://www.titikshapublicschool.com/wp-content/uploads/2018/11/developer-api.jpg',
          name: 'TuNR',
          email: 'tu@gmail.com',
        },
        {
          avatar:
            'http://www.titikshapublicschool.com/wp-content/uploads/2018/11/developer-api.jpg',
          name: 'ManhTT',
          email: 'manh@gmail.com',
        },
      ],
    }
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
    .btn-add-member {
      padding: 5px 10px;
      background-color: green;
      color: #fff;
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
    }
  }
}
</style>

