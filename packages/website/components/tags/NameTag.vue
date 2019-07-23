<template>
  <div class="feed-filter mb-2">
    <div class="clearfix">
      <div class="item-filter">
        <div class="selected-item mt-1">
          <ul class="clearfix p-0 m-0">
            <li class="mr-2">
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
</template>
<style lang="scss" scoped>
@import '@pubnow/ui/scss/_mixins.scss';
@import '@pubnow/ui/scss/_colors.scss';
.detail-tag {
  .feed-filter {
    padding: 10px 0;
    background: $white;
    @include radius-sm;
    position: relative;
    @include box-shadow;
    .item-filter.fluid {
      width: 100%;
    }
    .item-filter {
      float: left;
      padding: 0 10px;
      flex: none;
      width: 70%;
      .selected-item {
        & ul {
          list-style: none;
          li {
            float: left;
            position: relative;
            .remove {
              cursor: pointer;
              height: 18px;
              width: 18px;
              line-height: 18px;
              text-align: center;
              position: absolute;
              top: 2px;
              right: 2px;
            }
            a {
              padding: 0 24px 0 12px;
              text-transform: uppercase;
              font-size: 12px;
              line-height: 20px;
              display: block;
              border-radius: 20px;
              border: 1px solid $aqua;
              color: $aqua;
            }
          }
        }
      }
    }
  }
}
</style>