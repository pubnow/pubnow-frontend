<template>
  <b-card
    :title="title"
    img-src="https://picsum.photos/600/300/?image=25"
    :img-alt="title"
    img-top
    tag="article"
    class="mb-2"
  >
    <b-card-text>
      {{shortyBody}}
    </b-card-text>
    <div class="author-info">
      {{authorName}} in {{groupName}}
    </div>
    <div class="time-r">
      {{doc}} . {{timeReading}}
    </div>
  </b-card>
</template>

<script>
export default {
  props: {
    title: String,
    shortyBody: String,
    authorName: String,
    groupName: String,
    doc: String,
    timeReading: String,
    urlImage: String,
  }
}
</script>

<style scoped>
.card-body {
  padding: 15px !important;
  padding-top: 10px !important;
}
.author-info {
  font-size: 14px;
  font-weight: 500;
}
.time-r {
  font-size: 13px;
  color: #949494;
}
</style>
