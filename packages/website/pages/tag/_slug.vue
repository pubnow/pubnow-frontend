<template>
  <div class="detail-tag">
    <va-container>
      <HeaderDetailCategory />
      <va-row>
        <va-column :sm="8">
          <div class="feed-filter">
            <div class="clearfix">
              <div class="item-filter tags-filter fluid">
                <div class="selected-item">
                  <ul class="list-unstyled clearfix">
                    <li>
                      <a href="#">Thị trường</a>
                      <span class="remove">
                        <i class="fas fa-times"></i>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <LeftDetailCategory v-for="i in 5" :key="i" />
        </va-column>
        <va-column :sm="4" class="right">
          <RightDetailCategory />
        </va-column>
      </va-row>
    </va-container>
  </div>
</template>
<script>
import {
  HeaderDetailCategory,
  LeftDetailCategory,
  RightDetailCategory,
} from '~/components/category'
export default {
  components: {
    HeaderDetailCategory,
    LeftDetailCategory,
    RightDetailCategory,
  },
}
</script>
<style lang="scss" scoped>
.detail-tag {
  .feed-filter {
    padding: 10px 0;
    margin-bottom: 10px;
    background: #fff;
    border-radius: 3px;
    position: relative;
    -webkit-box-shadow: 0 0.5px 1px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 0 0.5px 1px rgba(0, 0, 0, 0.25);
    box-shadow: 0 0.5px 1px rgba(0, 0, 0, 0.25);
    .item-filter.fluid {
      width: 100%;
    }
    .item-filter {
      float: left;
      padding: 0 10px;
      flex: none;
      width: 70%;
      .selected-item {
        margin-top: 5px;
        & ul {
          list-style: none;
          padding: 0;
          margin: 0;
          li {
            float: left;
            position: relative;
            margin-right: 10px;
            .remove {
              cursor: pointer;
              height: 18px;
              width: 18px;
              line-height: 18px;
              text-align: center;
              position: absolute;
              top: 2px;
              right: 2px;
              border-radius: 50%;
            }
            a {
              padding: 0 24px 0 12px;
              text-transform: uppercase;
              font-size: 12px;
              line-height: 20px;
              display: block;
              border-radius: 20px;
              border: 1px solid #2fb5fa;
              color: #2fb5fa;
            }
          }
        }
      }
    }
  }
}
.feed-filter > .clearfix {
  display: flex;
  flex-wrap: wrap;
}
.right {
  padding-left: 40px !important;
}
ul {
  list-style: none;
}
a {
  background-color: transparent;
  text-decoration: none;
  outline: none;
  cursor: pointer;
}
</style>
