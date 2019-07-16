<template>
  <div
    class="wrap-header d-flex justify-content-end flex-column"
    :style="`background-image: url('${image}')`"
  >
    <div class="container">
      <h1 class="title text-white">{{ title }}</h1>
      <span class="more text-secondary">{{ date }} &nbsp; · &nbsp; {{ time }}</span>
      <p class="description text-white">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Nghĩ Lớn Qua Các Góc Nhìn Vĩ Mô',
      date: '28 tháng 3 2018',
      time: '17 phút đọc',
      description:
        '"Nghĩ lớn" có lẽ không còn là khái niệm "hot" nữa cho nên gần đây mình theo dõi báo chí thấy ít được nhắc đến. Thời Việt Nam mới hội nhập khi...',
      image: 'https://bulma.io/images/placeholders/720x240.png',
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_sizes.scss';

.wrap-header {
  background-size: cover;
  padding: $unit * 8 0 $unit 0;
  .title {
    font-size: $unit * 1.7;
    line-height: $unit * 2;
  }
  .more {
    font-size: $unit / 1.4;
  }
  .description {
    max-width: 550px;
  }
}
</style>
