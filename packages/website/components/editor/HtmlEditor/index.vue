<template>
  <div>
    <input class="title-input" placeholder="Tiêu đề bài viết" v-model="title" />
    <div class="tips">
      <div class="title">
        <va-icon type="lightbulb" class="mr-2"></va-icon>Mẹo
      </div>
      <div class="content">Bài viết của bạn sẽ sinh động hơn khi có thêm hình ảnh minh họa.</div>
    </div>
    <froala :tag="'textarea'" :config="config" v-model="model"></froala>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  props: {
    api: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      config: {
        events: {
          'froalaEditor.initialized': function() {
            console.log('initialized')
          },
        },
        key: 'mPD4tB1A2F1A1H1C2se1dpA-9H-9bB1tweF5C4C3E3E2C2C4D6B3C2==',
        placeholderText: 'Viết nên câu chuyện của bạn ...',
        heightMin: 345,
        attribution: false,
        enter: 1,
        requestHeaders: {
          Authorization: `Bearer ${this.$cookiz.get('token')}`,
        },
        imagePaste: false,
        imageUploadURL: `${this.api}/editor-upload`,
        imageUploadParam: 'file',
        imageManagerLoadURL: `${this.api}/editor-gallery`,
      },
    }
  },
  computed: {
    title: {
      get() {
        return this.$store.getters['article/title']
      },
      set(v) {
        this.$store.commit('article/setTitle', v)
      },
    },
    model: {
      get() {
        return this.$store.getters['article/content']
      },
      set(v) {
        this.$store.commit('article/setContent', v)
      },
    },
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
  font-weight: 700;
  margin-bottom: $unit / 2;
  width: 100%;
  padding: $unit / 2;
}

.tips {
  display: flex;
  margin-bottom: $unit / 2;
  border: 1px solid $b200;
  font-size: 14px;
  font-weight: 500;
  .title {
    padding: $unit / 4 $unit / 2;
    background-color: $b200;
    color: $white;
  }
  .content {
    padding: $unit / 4 $unit / 2;
    color: $n300;
  }
}
</style>

