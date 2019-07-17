<template>
  <div class="container bg-white">
    <author :avatar="author.avatar" :fullname="author.fullname" :time="time" :category="category" />
    <navbar :clap="clap" :comment="comment" />
    <div v-html="content" class="text-body mt-4 content-article" />
    <comment />
  </div>
</template>

<script>
import { Author, Navbar, Comment } from '../../components/article'

export default {
  components: {
    Author,
    Navbar,
    Comment,
  },
  data() {
    return {
      author: {
        avatar: 'https://bulma.io/images/placeholders/256x256.png',
        fullname: 'Phạm Ngọc Hòa',
      },
      title: 'Những sai lầm cần tránh khi kinh doanh cafe',
      content:
        '<p>Đầu tư rất nhiều chi phí mở quán cà phê nhưng kết quả lại không như mong đợi. Quán vắng khách, thua lỗ, thậm chí phải đóng cửa trong vài tháng ngắn ngủi. Vậy nguyên nhân dẫn đến&nbsp;<strong><em>thất bại khi mở quán cafe</em></strong>&nbsp;là gì? Mình nghĩ với 12 lý do sau đây sẽ rất có ích cho các bạn có dự định mở quán nhé.</p><blockquote class="wp-block-quote"><p>1. Thiếu khảo sát<br>Dù kinh doanh gì, muốn thành công đều phải có những kiến thức cơ bản về ngành. Tuy nhiên rất nhiều người mở quán cà phê nhưng lại bỏ qua giai đoạn tìm hiểu, khảo sát và bổ xung kiến thức. Đó cũng chính là một trong những lý do khiến họ thất bại khi mở và kinh doanh quán cà phê.<br><br>2. Thiếu kế hoạch<br>Lập kế hoạch kinh doanh rõ ràng, chi tiết trước khi mở quán cà phê sẽ giúp ta tiết kiệm được rất nhiều thời gian và tiền bạc. Nó sẽ cho bạn một cái nhìn tổng quát, rõ ràng hơn về quán cà phê mà bạn sắp sửa làm chủ. (click&nbsp;<a href="#" target="_blank" rel="noreferrer noopener">vào đây</a>&nbsp;để xem tiếp các bạn nhé)<br></p></blockquote><img src="https://bulma.io/images/placeholders/640x360.png" alt="demo" /><p>1. Sai lầm trong lựa chọn mặt bằng<br>Kinh doanh café cũng giống như nhiều hình thức kinh doanh dịch vụ khác. Lựa chọn được một mặt bằng phù hợp, có lợi thế là điều hết sức quan trọng. Tuy nhiên, do nóng vội mở cửa mà nhiều chủ quán café “chọn bừa” một địa điểm để mở quán.<br>Nhiều quán café ở vị trí mặt đường, tuy nhiên lại là đường một chiều, thử đặt vào vị trí của mình, bạn có sẵn sàng đi vòng một vòng để đến quán nếu mới chỉ nghe nhắc đến hoặc nhìn thấy, trong khi có ngay quán café ngay bên đường này.<br>Hay nếu bạn chọn một mặt bằng mà vỉa hè rất nhỏ, không bố trí được nơi để xe cũng khiến cho khách hàng rất e ngại mỗi lần vào quán của bạn.<br><br>2. Không xác định được khách hàng mục tiêu<br>Café là loại đồ uống mà đa dạng người dùng với nhiều loại khác nhau. Tùy vào vị trí của quán café mà chủ cửa hàng nên tính toán để lựa chọn khách hàng mục tiêu phù hợp.<br>Tuy nhiên, không phải chủ cửa hàng nào cũng để ý đến vấn đề này. Thế nên nhiều quán café mặc dù đầu tư rất kỹ lưỡng, vị trí rất đẹp, đồ uống rất ngon nhưng lại sớm đóng cửa. Đây là cái kết chung của nhiều quán café không xác định khách hàng mục tiêu của mình trước khi bước vào kinh doanh.<br>Khi vị trí quán của mình ở khu có nhiều văn phòng, công ty nhưng lại trang trí quán theo kiểu ngộ nghĩnh, ngọt ngào của tuổi teen, menu đồ uống lại đầu tư về các đồ uống cho teen hoặc một quán ở gần khu trường học lại chỉ đầu tư đồ uống và trang trí quán hướng đến dân văn phòng với café đen và không gian tĩnh lặng thì chỉ một thời gian kéo dài như thế, quán bạn sẽ không có khách và nhanh chóng đóng cửa. (<a href="#" target="_blank" rel="noreferrer noopener">thông tin đầy đủ</a>)”</p>',
      time: '12 giờ trước',
      category: 'Quan điểm - Tranh luận',
      clap: 125,
      comment: 15,
    }
  },
}
</script>

<style lang="scss">
@import '@pubnow/ui/scss/_sizes.scss';
@import '@pubnow/ui/scss/_mixins.scss';

.container {
  @include box-shadow;
  max-width: 750px;
  .content-article {
    font-size: $unit / 1.25;
    p {
      line-height: $unit * 1.25;
    }
    img {
      width: 100%;
    }
  }
}
</style>

