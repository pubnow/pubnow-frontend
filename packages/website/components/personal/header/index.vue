<template>
  <div class="wrap-header d-flex justify-content-end flex-column">
    <div class="container">
      <h1 class="title">{{ title }}</h1>
      <span class="more">{{ date }} &nbsp; · &nbsp; {{ time }}</span>
      <p class="description">{{ description }}</p>
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
      description: '"Nghĩ lớn" có lẽ không còn là khái niệm "hot" nữa cho nên gần đây mình theo dõi báo chí thấy ít được nhắc đến. Thời Việt Nam mới hội nhập khi...'
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap-header {
  background-image: url('http://www.timeline-covers.net/-/pics/laptop-background/5153-laptop-background-facebook-cover.jpg');
  background-size:cover;
  padding: 6rem 0 0.5rem 0;
  color: white;
  width: 100vw;
  .title {
    font-size: 34px;
    line-height: 42px;
  }
  .more {
    font-size: 14px;
    color: #ffffffe0;
  }
  .description {
    max-width: 550px;
  }
  @media (max-width: 575.98px) {
    padding-top: 1rem;
    .title {
      font-size: 20px;
    }
    .more {
      font-size: 13px;
    }
    .description {
      font-size: 14px;
    }
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    padding-top: 2rem;
    .title {
      font-size: 26px;
    }
    .more {
      font-size: 14px;
    }
    .description {
      font-size: 15px;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    padding-top: 4rem;
    .description {
      font-size: 16px;
    }
    .more {
      font-size: 15px;
    }
  }
}
</style>
