<template>
  <b-card no-body class="overflow-hidden mb-2">
    <b-row no-gutters>
      <b-col md="4">
        <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0 h-100" />
      </b-col>
      <b-col md="8">
        <b-card-body class="h-100">
          <div class="title">{{title}}</div>
          <div>
            <div class="author-info">
              {{authorName}} in {{groupName}}
            </div>
            <div class="time-r">
              {{doc}} . {{timeReading}}
            </div>
          </div>
        </b-card-body>
      </b-col>
    </b-row>
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
.title {
  /* white-space: nowrap; */
  display: -webkit-box;
  margin: 0 auto;
  font-weight: 600;
  height: 35px;
  font-size: 17px;
  line-height: 1;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.card-body {
  padding: 5px 5px 5px 10px !important;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
