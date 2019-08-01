<template>
  <div>
    <h1>{{ title }}</h1>
    <va-badge v-for="(tag, index) in tags" :key="`tag-${index}`" class="mr-2">{{ tag }}</va-badge>
    <div class="mt-2">
      <span>Đăng lúc {{ date }} &nbsp; · &nbsp;</span>
      <va-tooltip trigger="hover" content="Views" placement="bottom">
        <i class="fas fa-eye icon"></i>
      </va-tooltip>
      <span class="number">{{ views }}</span>
      <va-tooltip trigger="hover" content="Clips" placement="bottom">
        <i class="fas fa-paperclip icon"></i>
      </va-tooltip>
      <span class="number">{{ clips }}</span>
      <va-tooltip trigger="hover" content="Comments" placement="bottom">
        <i class="fas fa-paperclip icon"></i>
      </va-tooltip>
      <span class="number">{{ comments }}</span>
      <va-tooltip trigger="hover" content="Posts" placement="bottom">
        <i class="fas fa-paste icon"></i>
      </va-tooltip>
      <span class="number">{{ posts }}</span>
    </div>
    <p class="description">{{ description }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Cộng hòa xã hội chủ nghĩa việt nam',
      date: '16 tháng 6 năm 2019',
      tags: [
        'cộng hòa',
        'xã hội',
        'chủ nghĩa',
        'việt nam',
        'độc lập',
        'tự do',
        'hạnh phúc',
        'tôi',
        'nói',
        'đồng bào',
        'có nghe',
        'rõ không',
        'hả',
        'nếu không',
        'nghe',
        'rõ',
      ],
      views: 12,
      clips: 25,
      comments: 153,
      posts: 12,
      description:
        'Việc gì, dù lợi cho mình, phải xét nó có lợi cho nước không? Nếu không có lợi, mà có hại cho nước thì quyết không làm. Mỗi ngày cố làm một việc có lợi cho nước (lợi cho nước tức là lợi cho mình), dù là việc nhỏ, thì một năm ta làm được 365 việc. Nhiều lợi nhỏ cộng lại thành lợi to',
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_colors.scss';

.icon {
  font-size: 12px;
  margin-right: 2px;
}
.number {
  margin-right: 8px;
}
.description {
  color: $tumblr;
}
</style>
