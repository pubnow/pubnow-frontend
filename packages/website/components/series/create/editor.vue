<template>
  <div>
    <input class="title-input" placeholder="Tiêu đề series" v-model="title" />
    <froala :tag="'textarea'" :config="config" v-model="model"></froala>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  data() {
    return {
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
  font-family: $ale;
  border: 1px dashed $n70;
  background: transparent;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: $unit / 2;
  width: 100%;
  padding: $unit / 2;
}
</style>

