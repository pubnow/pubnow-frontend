<template>
  <div class="left-content">
    <ul class="feed-list">
      <li class="feed-post">
        <div class="inner">
          <div class="author">
            <img
              :src="article.author.avatar"
              class="avatar"
              v-if="article.author.avatar !== ''"
              alt
            />
            <img v-else class="avatar" src="https://cdn.head-fi.org/g/2283245_l.jpg" alt />
            <div class="d-flex flex-column justify-content-center">
              <div>
                <span class="hover-username">
                  <a href="#" class="name">{{article.author.name}}</a>
                </span>
                trong
                <a class="category-name">{{categoryName}}</a>
              </div>
              <div class="created">
                <span class="date">{{article.updatedAt | formatDate}}</span>
              </div>
            </div>
          </div>
          <nuxt-link :to="`/bai-viet/${article.slug}`" class="link-article">
            <div class="image">
              <img
                class="img-fluid w-100"
                v-if="article.thumbnail !== ''"
                :src="article.thumbnail"
                alt
              />
              <div v-else class="no-thumbnail h-100 d-flex justify-content-center">
                <img class="thumbnail-logo" src="@/assets/images/logo.svg" alt />
              </div>
            </div>
            <h3 class="title">{{article.title}}</h3>
            <p class="content">{{article.excerpt}}</p>
          </nuxt-link>
          <div class="tags" v-if="article.tags.length > 0">
            <ul class="list-unstyled" v-for="(tag, id) in article.tags" :key="id">
              <li>
                <nuxt-link :to="`/tag/${tag.slug}`">{{tag.name}}</nuxt-link>
              </li>
            </ul>
          </div>
          <div class="toolbar">
            <div class="pull-left">
              <div class="vote-box">
                <span class="icon">
                  <img
                    :src="require('@/assets/images/icons/clap.svg')"
                    alt="clap icon"
                    @click="clapArticle(article.id)"
                  />
                </span>
                <a>{{article.claps}}</a>
              </div>
            </div>
            <div class="pull-right">
              <span class="views">
                <span class="icon">
                  <img :src="require('@/assets/images/icons/comment.svg')" alt="clap icon" />
                </span>
                <span class="text">{{article.comments_count}}</span>
              </span>
              <a href="#" class="comment">
                <span class="icon">
                  <img
                    :src="require('@/assets/images/icons/bookmark.svg')"
                    alt="comment icon"
                    @click="bookmarkArticle(article.id)"
                  />
                </span>
              </a>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    article: {
      type: Object,
    },
    categoryName: {
      type: String,
    },
  },
  computed: {
    ...mapGetters({
      user: 'auth/user',
    }),
  },
  methods: {
    clapArticle(id) {
      if (this.user) {
      } else {
        this.$router.push('/dang-nhap')
      }
    },
    bookmarkArticle(id) {
      if (this.user) {
      } else {
        this.$router.push('/dang-nhap')
      }
    },
  },
}
</script>


<style lang="scss" scoped>
@import '@pubnow/ui/scss/_mixins.scss';
@import '@pubnow/ui/scss/_fonts.scss';
@import '@pubnow/ui/scss/_colors.scss';
@import '@pubnow/ui/scss/_sizes.scss';

.left-content {
  .feed-list {
    padding-left: 0;
    list-style-type: none;
    .feed-post {
      margin-bottom: 10px;
      .inner {
        padding: 15px 20px;
        background: #fff;
        position: relative;
        @include radius-md;
        @include box-shadow;
        .author {
          font-size: 13px;
          line-height: 15px;
          color: #99a3ad;
          display: flex;
          .avatar {
            height: 36px;
            width: 36px;
            border-radius: 50%;
            margin-right: $unit / 4;
            object-fit: cover;
          }

          .category-name {
            color: #2c3e50 !important;
          }
        }
        .link-article {
          &:hover {
            text-decoration: none;
            color: #505e77;
          }
          .image {
            margin-top: 15px;
            overflow: hidden;
            display: block;
            width: 100%;
            height: 200px;
            position: relative;
            overflow: hidden;
            .no-thumbnail {
              background-color: rgba(0, 0, 0, 0.05);
            }
          }
          .title {
            margin: 15px 0 0;
            word-break: break-word;
            & a {
              color: #2c3e50;
              font-family: $ale;
              font-size: 24px !important;
              font-weight: bold;
              line-height: 30px;
              display: block;
            }
          }
          .content {
            color: #505e77;
            .body {
              display: block;
              word-break: break-word;
              color: inherit;
              font-family: $noto;
              font-size: 16px;
              color: #34495e !important;
            }
          }
        }
        .tags {
          margin-top: 10px;
          height: 30px;
        }
        .tags > ul > li > a {
          display: block;
          background: #f9f9f9;
          padding: 3px 8px;
          text-transform: uppercase;
          font-size: 11px;
          color: #999;
          font-family: Arial;
        }
        .tags > ul > li {
          float: left;
          margin-right: 5px;
          margin-bottom: 5px;
        }
        .toolbar {
          margin-top: 10px;
          height: 30px;
          .pull-left {
            float: left;
            .vote-box {
              position: relative;
              padding-right: 55px;
            }
          }
          .pull-right {
            .views {
              color: #99a3ad;
              line-height: 20px;
              display: inline-block;
              margin-right: 20px;
            }
          }
        }
      }
    }
  }
}
.list-unstyled {
  padding-left: 0;
  list-style: none;
}
.icon {
  color: #99a3ad;
  font-size: 20px;
  cursor: pointer;
}
a {
  background-color: transparent;
  text-decoration: none;
  outline: none;
  cursor: pointer;
}

.feed-list .feed-post .inner .title .text {
  color: #99a3ad;
}
.title a:hover {
  text-decoration: none !important;
}
.body a:hover {
  text-decoration: none !important;
}
.content a:hover {
  text-decoration: none !important;
}
</style>
