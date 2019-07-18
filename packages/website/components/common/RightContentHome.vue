<template>
  <div class="left">
    <aside class="uiScale name-dec">
     <div class="text-dec">
      <a href="#">
        <div class="u-flexCenter u-justifyContentSpaceBetween u-borderBottomLighter u-marginTop32 u-paddingBottom16 u-marginRight32 u-marginLeft32 ">
          <h3 class="ui-h2">Popular on Medium</h3>
        </div>
      </a>
     </div>
      <ol class="u-padding32">
        <li class="u-flex u-marginBottom24" v-for="(i,index) in 4" :key="index">
          <div class="u-textColorLighter u-fontSize32 u-marginTop4">
            0{{index+1}}
          </div>
          <div class="u-flex1 u-marginLeft16 u-minWidth200 js-trackPostPresentation name-dec">
            <div class="text-dec">
              <a href="#" class="u-overflowHidden u-flex0 u-width100pct" >
              <h2 class="ui-h4 u-marginBottom4">
                Pump You Up: The Enduring Power of Protein Powder
              </h2>
            </a>
            </div>
            <div class="postMetaInline postMetaInline-authorLockup u-padding0 u-flexShrink1 u-noWrapWithEllipsis p-top colorText">
              <a href="#" class="postMetaInline  ">Caitlin Dewey </a> in
              <a href="#" class="postMetaInline  "> OneZero</a>
              <div class="ui-caption u-noWrapWithEllipsis colorText1">
                <span class="u-noWrap u-inlineBlock u-lineHeightBase">
                  Jul 17
                </span>
                <span class="middoDivider">
                  .
                </span>
                <span class="readingTime">
                  6 min read
                </span>
                <span class="u-paddingLeft4">
                  <i class="fas fa-star"></i>
                </span>
              </div>
            </div>
          </div>
        </li>
      </ol>
    </aside>
  </div>
</template>
<style lang="scss" scoped>
.left {
  .uiScale {
    line-height: 20px;
    font-size: 16px;
  }
  .p-top {
    margin-top: 10px;
  }
  .ui-h2 {
    --x-height-multiplier: 0.342 !important;
    --baseline-multiplier: 0.22 !important;
    font-family: medium-content-sans-serif-font, 'Lucida Grande',
      'Lucida Sans Unicode', 'Lucida Sans', Geneva, Arial, sans-serif !important;
    font-style: normal !important;
    font-weight: 700 !important;
    font-size: 22px !important;
    line-height: 28px !important;
    transform: translateY(-0.72px);
    letter-spacing: -0.42px !important;
  }
  .uiScale .postMetaInline {
    line-height: inherit !important;
    letter-spacing: inherit !important;
    font-family: inherit !important;
    font-weight: inherit !important;
    font-style: inherit !important;
    fill: inherit !important;
  }
  .u-padding0 {
    padding: 0 !important;
  }
  .u-flexShrink1 {
    -webkit-flex-shrink: 1;
    -ms-flex-negative: 1;
    flex-shrink: 1;
  }
  .u-noWrapWithEllipsis {
    white-space: nowrap !important;
    text-overflow: ellipsis !important;
    overflow: hidden !important;
  }
  .colorText {
    color: rgba(0, 0, 0, 0.84) !important;
    & a {
      color: rgba(0, 0, 0, 0.84) !important;
      font-size: 15px !important;
    }
  }
  .colorText {
    & a:hover {
      color: rgba(0, 0, 0, 0.84) !important;
      text-decoration: underline !important;
    }
  }
  .text-dec {
    & a:hover {
      text-decoration: none !important;
    }
  }
  span {
    color: rgba(0, 0, 0, 0.54) !important;
    font-size: 15px !important;
  }
  .postMetaInline-authorLockup {
    font-size: 14px;
    line-height: 1.4;
    padding-left: 10px;
    text-rendering: auto;
  }
  .u-borderBottomLighter {
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  }
  .u-paddingBottom16 {
    padding-bottom: 16px;
  }
  .u-marginRight32 {
    margin-right: 32px;
  }
  .u-marginLeft32 {
    margin-left: 32px;
  }
  .u-marginTop32 {
    margin-top: 32px;
  }
  .u-justifyContentSpaceBetween {
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
  .u-flexCenter {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }
  .u-borderBottomLighter {
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  }
  .u-padding32 {
    padding: 32px;
  }
  .u-marginBottom24 {
    margin-bottom: 24px;
  }
  .u-flex {
    display: flex;
  }
  .u-fontSize32 {
    font-size: 34px;
  }
  .u-textColorLighter {
    color: rgba(0, 0, 0, 0.15) !important;
    fill: rgba(0, 0, 0, 0.15) !important;
  }
  .u-marginTop4 {
    margin-top: 4px !important;
  }
  .u-width100pct {
    width: 100% !important;
  }
  .u-flex0 {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
  }
  .u-overflowHidden {
    overflow: hidden !important;
  }
  .ui-h4.ui-clamp3 {
    overflow: hidden !important;
    max-height: 60px !important;
    text-overflow: ellipsis !important;
    display: -webkit-box !important;
    -webkit-line-clamp: 3 !important;
    -webkit-box-orient: vertical;
  }
  .u-marginLeft16 {
    margin-left: 16px !important;
  }
  .ui-h4 {
    font-weight: 600 !important;
    color: rgba(0, 0, 0, 0.84) !important;
    fill: rgba(0, 0, 0, 0.84) !important;
    --x-height-multiplier: 0.342 !important;
    --baseline-multiplier: 0.22 !important;
    font-family: medium-content-sans-serif-font, 'Lucida Grande',
      'Lucida Sans Unicode', 'Lucida Sans', Geneva, Arial, sans-serif !important;
    font-style: normal !important;
    font-size: 16px !important;
    line-height: 20px !important;
    transform: translateY(0.96px);
    letter-spacing: -0.17px !important;
  }
  .u-marginBottom4 {
    margin-bottom: 4px !important;
  }
  .u-minWidth0 {
    min-width: 0 !important;
  }
  .u-noWrapWithEllipsis {
    white-space: nowrap !important;
    text-overflow: ellipsis !important;
    overflow: hidden !important;
  }
  .u-flexTop {
    display: flex !important;
    -webkit-box-align: start !important;
    align-items: flex-start !important;
  }
}
ol {
  list-style: none;
  list-style-image: none;
}
a {
  color: rgba(0, 0, 0, 0.84);
  text-decoration: none;
  font-family: medium-content-sans-serif-font, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
    sans-serif;
}
// a:hover {
//   color: rgba(0, 0, 0, 0.84);
//   text-decoration: underline;
// }
</style>
