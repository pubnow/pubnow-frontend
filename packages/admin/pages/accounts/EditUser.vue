<template>
  <div class="wrap-edit mt-3">
    <h1 class="text-center">Chỉnh sửa Thành viên</h1>
    <va-button @click="change" type="primary">Chỉnh sửa</va-button>
    <b-form class="mt-2">
      <b-form-group id="input-group-name" label="Tên đầy đủ:" label-for="input-name">
        <b-form-input
          id="input-name"
          :value="selected.name"
          @input="updateName"
          type="text"
          required
          :readonly="boolean"
          placeholder="Nhập tên chuyên mục"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-email" label="Email:" label-for="input-email">
        <b-form-input
          id="input-email"
          type="text"
          :value="selected.email"
          :readonly="true"
          required
          placeholder="Nhập email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-slug" label="Username:" label-for="input-username">
        <b-form-input
          id="input-slug"
          :value="selected.username"
          type="text"
          required
          :readonly="true"
          placeholder="Nhập username"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-role" label="Chức vụ:" label-for="input-role">
        <b-form-select id="input-role" @input="updateRold" v-model="temp" :value="selected.role ? selected.role.name : 'Thành Viên'" :options="roleOptions" :disabled="boolean"></b-form-select>
      </b-form-group>
           {{temp}}
           {{form}}
      <va-button :disabled="check" @click="update" type="primary">Cập nhật</va-button>
      <va-button type="danger">Xóa</va-button>
      <!-- <b-modal centered hide-header hide-backdrop hide-footer v-model="modalShow">
        <div>
          <div class="text-center">Bạn có muốn xóa chuyên mục {{ selected.name }}</div>
          <div class="delete-category text-center">
            <va-button class="not-delete" @click="modalShow =! modalShow">Không</va-button>
            <va-button class="btn-delete" type="danger">Xóa</va-button>
          </div>
        </div>
      </b-modal> -->
    </b-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    selected: {
      type: Object,
    },
    boolean: {
      type: Boolean,
    },
  },
  data() {
    return {
      modalShow: false,
      check: true,
      url: null,
      disable: false,
      temp: '',
      form: {
        name: '',
        role: '',
      },
    }
  },
  updated() {
    this.updateRole()
  },
  // mounted() {
  //   this.updateRole()
  // },
  computed: {
    ...mapGetters({
      roles: 'role/roles'
    }),
    roleOptions() {
      return this.roles.map(role => ({
        value: role.name,
        text: role.description
      }))
    }
  },
  methods: {
    updateRole() {
      this.form.role = this.selected.role ? this.selected.role.name : 'member'
    },
    change() {
      this.boolean = false
      this.form.name = this.selected.name
    },
    updateName(value) {
      this.form.name = value
      this.check = false
    },
    updateRold(value) {
      this.form.role = value
      this.check = false
    },
    async update() {
      let submit = new Object()
      // if (this.form.role != this.selected.role.name) {
      //   submit.role = this.form.role
      // }
      // for(let i = 0; i < this.roles.length; i++) {
      //   console.log('xxx')
      //   console.log('yyy', this.roles.name)
      //   console.log('zzz', this.temp)
      //   if(this.roles[i].name == this.temp) {
      //     submit.role = this.roles
      //     console.log('xxxx')
      //   }
      // }
      this.roles.forEach(element => {
        if(element.name == this.temp) {
          submit.role = element
          console.log('xxxx')
          console.log(submit.role)
        }
      });
      if (this.form.name != this.selected.name) {
        submit.name = this.form.name
      }
      console.log(submit)
      this.$http.setHeader('Accept', 'application/json')
      await this.$http.$put(`users/${this.selected.username}`, {
        ...submit,
      })
      // this.$router.go()
    },
    // async deleteCat() {
    //   await this.$http.delete(`categories/${this.selected.slug}`)
    //   this.$router.go()
    // }
  },
}
</script>
<style lang="scss" scoped>
.wrap-edit.mt-3 {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}
.delete-category {
  margin-top: 30px;
  .btn-delete {
    margin-right: 10px;
  }
  .not-delete {
    border: 1px solid;
  }
}
</style>


