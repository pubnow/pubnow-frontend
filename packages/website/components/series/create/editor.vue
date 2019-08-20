<template>
  <no-ssr>
    <div>
      <input class="title-input" placeholder="Tiêu đề series" v-model="title" />
      <froala :tag="'textarea'" :config="config" v-model="content"></froala>
      <va-button class="mt-2" @click="create" v-if="status === 'create'">
        <va-icon type="plus" class="mr-2" />Tạo series
      </va-button>
      <va-button type="success" class="mt-3" @click="edit" v-if="status === 'edit'">
        <va-icon type="check" class="mr-2" />Lưu
      </va-button>
    </div>
  </no-ssr>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    dataSeries: {
      type: Object,
      default: null,
    },
    status: {
      type: String,
      required: true,
    },
  },
  mounted() {
    const data = this.dataSeries
    if (data) {
      this.title = data.title
      this.content = data.content
    }
  },
  computed: {
    ...mapGetters({
      series: 'series/series',
    }),
  },
  methods: {
    async create() {
      let data = {
        title: this.title,
        content: this.content,
        articles: [],
      }
      let result = await this.$store.dispatch('series/write', data)
      if (result) {
        this.notification.info({
          title: `Thông báo`,
          message: `Tạo series thành công`,
          duration: 1690,
          onHide: () => {
            if (this.series) {
              this.$router.push(`/series/${this.series.slug}/chinh-sua`)
            }
          },
        })
      } else {
        this.notification.danger({
          title: `Rất tiếc`,
          message: `Có lỗi xảy ra, vui lòng thử lại sau.`,
          duration: 2000,
        })
      }
    },
    edit() {
      this.series.articles.forEach(item => this.dataID.push(item.id))
      let data = {
        articles: [...this.dataID],
        title: this.title,
        content: this.content,
        slug: this.series.slug,
      }
      let result = this.$store.dispatch('series/edit', data)
      if (result) {
        this.notification.info({
          title: `Thông báo`,
          message: `Sửa thông tin series thành công`,
          duration: 1690,
          onHide: () => {
            this.$router.push(`/series/${this.series.slug}`)
          },
        })
      } else {
        this.notification.danger({
          title: `Rất tiếc`,
          message: `Có lỗi xảy ra, vui lòng thử lại sau.`,
          duration: 2000,
        })
      }
    },
  },
  data() {
    return {
      dataID: [],
      title: '',
      content: '',
      config: {
        events: {
          'froalaEditor.initialized': function() {
            console.log('initialized')
          },
        },
        key: 'mPD4tB1A2F1A1H1C2se1dpA-9H-9bB1tweF5C4C3E3E2C2C4D6B3C2==',
        placeholderText: 'Mô tả chủ đề series ...',
        heightMin: 200,
        attribution: false,
        enter: 1,
        requestHeaders: {
          Authorization: `Bearer ${this.$cookiz.get('token')}`,
        },
        imageUploadURL: `${this.api}/editor-upload`,
        imageUploadParam: 'file',
        imageManagerLoadURL: `${this.api}/editor-gallery`,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_fonts.scss';
@import '@pubnow/ui/scss/_sizes.scss';
@import '@pubnow/ui/scss/_colors.scss';

.title-input {
  border: 1px dashed $n70;
  background: transparent;
  font-size: 32px;
  margin-bottom: $unit / 2;
  width: 100%;
  padding: $unit / 2;
}
</style>

