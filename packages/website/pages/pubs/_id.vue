<template>
  <div class="container">
    <div class="content-inner">
      <h1 class="pub-title">Answering Questions on Flutter App Development</h1>
      <div class="pub-sub-title">
        Flutter is Google’s portable UI toolkit for building beautiful, natively-compiled applications for mobile, web, and desktop from a single codebase.
      </div>
      <div class="card-author">
        <b-img class="avatar-author" src="https://picsum.photos/1024/400/?image=41" fluid rounded="circle" alt="Avatar Author" />
        <div class="author-info">
          <div class="top-infor">
            <div class="author-name">Mark Allen</div>
            <b-button pill variant="outline-info" size="sm" class="btn-follow">follow</b-button>
          </div>
          <div class="bottom-info">
            <div class="publish-date">June 24, 2019</div>
            <div class="time-reading">20 min read</div>
          </div>
        </div>
      </div>
      <div class="pub-content">
        <p>
          After interacting with a lot of students and developers personally and through my talks and workshops, I realised a lot of them have common questions and
          sometimes misconceptions about Flutter and app development in it. So I decided to write an article for clarifying doubts which were rather prevalent. Note
          that this article is meant to be an explainer rather than a point-perfect description of every aspect. There might be some exceptions I might not have
          covered for brevity. Note that Flutter itself also has a FAQ page for various backgrounds at flutter.io , I will be focusing more on questions I see asked
          frequently. Some of them are also included in the Flutter FAQs but I try to give my perspective on it.
        </p>
        <h4>Where are the layout files? / Why doesn’t Flutter have layout files?</h4>
        <p>
          In the Android framework, we separate an activity into layout and code. Because of this, we need to get references to views to work on them in Java.
          (Of course Kotlin lets you avoid that.) The layout file itself would be written in XML and consist of Views and ViewGroups.
        </p>
        <p>
          Flutter uses a completely new approach where instead of Views, you use widgets. A View in Android was mostly an element of the layout, but in Flutter,
          a Widget is pretty much everything. Everything from a button to a layout structure is a widget. The advantage here is in customisability.
          Imagine a button in Android. It has attributes like text which lets you add text to the button. But a button in Flutter does not take a title
          as a string, but another widget. Meaning inside a button you can have text, an image, an icon and pretty much anything you can imagine without
          breaking layout constraints. This also lets you make customised widgets pretty easily whereas in Android making customised views is a rather
          difficult thing to do.
        </p>
      </div>
      <div class="pub-tags">
        <div v-for="(tag, index) in tags" :key="`${index}`" class="tag">{{tag}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      tags: ['flutter', 'mobile', 'web', 'react native']
    }
  }
}
</script>

<style scoped>
.content-inner {
  max-width: 740px;
  padding: 50px 20px;
  margin: 0 auto;
}
.pub-sub-title {
  font-size: 0.9rem;
  color: #949494;
  font-weight: 500;
}
.card-author {
  margin: 20px 0;
  display: flex;
}
.avatar-author {
  height: 60px;
  width: 60px;
  margin-right: 15px;
}
.author-info {
  display: flex;
  flex-direction: column;
}
.top-infor, .bottom-info {
  display: flex;
  align-items: center;
}
.top-infor {
  margin-bottom: 4px;
}
.author-name {
  font-weight: 600;
  margin-right: 20px;
}
.btn-follow {
  padding: 0.115rem 0.65rem !important;
  font-weight: 600;
}
.publish-date, .time-reading {
  font-size: 12px;
  margin-right: 20px;
  font-weight: 600;
  color: #585858;
}
.pub-content {
  padding-top: 10px;
  padding-bottom: 20px;
}
.pub-tags {
  display: flex;
  flex-wrap: wrap;
}
.tag {
  border-radius: 6px;
  border: 1px solid #cecece;
  padding: 0.155rem 0.65rem;
  font-size: 14px;
  color: #333;
  margin-right: 8px;
}
</style>
