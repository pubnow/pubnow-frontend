<template>
  <div class="mt-5">
    <h1 class="mb-4 text-center">Tạo thành viên</h1>
    <va-form
      style="width: 80%; margin-left: auto; margin-right: auto;"
      ref="form"
      :type="type"
    >
      <va-form-item label="Tên đầy đủ" need>
        <va-input
          name="name"
          v-model="form.name"
          placeholder="Nhập họ và tên"
          :rules="[{ type: 'required' }]"
          clearable
        />
      </va-form-item>
      <va-form-item label="Email" need>
        <va-input
          name="email"
          v-model="form.email"
          placeholder="Nhập email"
          :rules="[{ type: 'required' }]"
          clearable
        />
      </va-form-item>
      <va-form-item label="Username" need>
        <va-input
          name="username"
          v-model="form.username"
          placeholder="Nhập username"
          :rules="[{ type: 'required' }]"
          clearable
        />
      </va-form-item>
      <va-form-item label="Chức vụ" need>
        <va-select
          name="role"
          placeholder="Choose one"
          v-model="form.role"
          :rules="[{ type: 'required' }]"
        >
          <va-option
            v-for="(role, index) in roles"
            :key="index"
            :value="role.value"
            >{{ role.name }}</va-option
          >
        </va-select>
      </va-form-item>
      <va-form-item>
        <va-button type="primary">Thêm thành viên</va-button>
      </va-form-item>
    </va-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: 'horizontal',
      form: {
        name: '',
        email: '',
        username: '',
        role: '',
      },
      roles: [
        { name: 'Admin', value: 'admin' },
        { name: 'Tester', value: 'tester' },
        { name: 'Thành viên', value: 'user' },
      ],
    }
  },
}
</script>
