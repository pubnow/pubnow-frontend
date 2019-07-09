<template>
  <div class="card-text-wrapper">
    <div class="basedon mb-1">{{categoryName}}</div>
    <b-card
      :title="title"
      :img-alt="title"
      class="mb-4"
    >
      <b-card-text class="mb-2">
        {{shortyBody}}
      </b-card-text>
      <div class="author-info">
        {{authorName}} in {{groupName}}
      </div>
      <div class="time-r">
        {{doc}} . {{timeReading}}
      </div>
    </b-card>
  </div>
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
    categoryName: String,
  }
}
</script>

<style scoped>
.card-body {
  padding-top: 10px !important;
}
.card-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.author-info {
  font-size: 14px;
  font-weight: 500;
}
.time-r {
  font-size: 13px;
  color: #949494;
}
.basedon {
  color: #949494;
  font-size: 18px;
}
</style>
