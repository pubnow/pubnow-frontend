<template>
  <div class="streamItem streamItem--heading js-streamItem">
    <div class="streamItemHeading " v-for="i in 5" :key="i">
      <header class="u-flexCenter u-marginBottom25 u-borderBottomLighter u-xs-flexWrap">
        <div class="u-flex1 u-flexTop text-dec">
          <span class="heading-title heading-title--lineHeightTight u-uiDisplayBold u-fontSize20  u-block u-paddingBottom20 ">
            <a class="link link--noUnderline u-baseColor--link" href="#">Featured for members</a>
          </span>
        </div>
      </header>
      <div class="streamItem streamItem--extremePostPreview js-streamItem" v-for="i in 5" :key="i">
        <article class="extremePostPreview u-marginBottom48 " >
          <div class="extremePostPreview-post u-minWidth0 u-flex1 u-marginRight24 u-textAlignLeft ">
           <div class="text-dec">
              <a href="#" class="ds-link u-overflowHidden u-width100pct">
              <h2>I’m Learning How to Be Irrational</h2>
            </a>
            <a href="#" class="ds-link  u-width100pct">
              <div class="ui-summary u-marginTop2">Confessions of a helicopter parent, podcaster, and person</div>
            </a>
           </div>
            <div class="u-flex u-minWidth0 u-justifyContentSpaceBetween u-marginTop12 colorText">
              <a href="#" class="postMetaInline  ">Scott Galloway</a> in
              <a href="#" class="postMetaInline  ">No Mercy / No Malice</a>
              <div class="ui-caption u-noWrapWithEllipsis ">
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
          <div class="extremePostPreview-image u-flex0">
             <a href="#" class="u-block u-backgroundCover u-sizeFull" v-bind:style="{ backgroundImage: 'url(https://cdn-images-1.medium.com/fit/c/152/156/1*HKDooqfZX3gPtbywIn6yqg.png)' }" >
            </a>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.streamItemHeading {
  .u-borderBottomLighter {
    border-bottom: 1px solid rgba(0, 0, 0, 0.15) !important;
  }
  .u-marginBottom25 {
    margin-bottom: 25px !important;
  }
  .u-flexCenter {
    display: flex !important;
    -webkit-box-align: center !important;
    align-items: center !important;
  }
  .u-flex1 {
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
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
  .u-flexTop {
    display: flex !important;
    -webkit-box-align: start !important;
    align-items: flex-start !important;
  }
  .u-uiDisplayBold {
    font-weight: 600 !important;
  }
  .extremePostPreview-image {
    width: 152px;
  }
  .heading-title--lineHeightTight {
    line-height: 1.2;
  }
  .u-fontSize20 {
    font-size: 22px !important;
  }
  .u-uiDisplayBold {
    font-family: medium-content-sans-serif-font, -apple-system,
      BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif !important;
    letter-spacing: 0 !important;
    font-weight: 700 !important;
    font-style: normal !important;
  }
  .u-textColorDarker {
    color: rgba(0, 0, 0, 0.84) !important;
    fill: rgba(0, 0, 0, 0.84) !important;
  }
  .u-borderBottomNormal {
    border-bottom: 1px solid rgba(0, 0, 0, 0.54) !important;
  }
  .u-paddingBottom20 {
    padding-bottom: 20px !important;
  }
  .u-marginBottomNegative1 {
    margin-bottom: -1px !important;
  }
  .u-block {
    display: block !important;
  }
  .u-fontSize12 {
    font-size: 15px !important;
  }
  .u-textUppercase {
    text-transform: uppercase !important;
  }
  .extremePostPreview {
    display: flex;
    -webkit-box-align: stretch;
    align-items: stretch;
    -webkit-box-flex: 1;
    flex: 1 1 auto;
    width: 100%;
  }
  .u-marginRight24 {
    margin-right: 24px !important;
  }
  .u-marginBottom48 {
    margin-bottom: 48px !important;
  }
  .u-minWidth0 {
    min-width: 0 !important;
  }
  .u-textAlignLeft {
    text-align: left !important;
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
  .ui-summary {
    color: rgba(0, 0, 0, 0.54) !important;
    fill: rgba(0, 0, 0, 0.54) !important;
  }
  .u-marginTop2 {
    margin-top: 2px !important;
  }
  .postMetaInline {
    font-style: inherit !important;
  }
  .u-marginTop12 {
    margin-top: 12px !important;
  }
  span {
    color: rgba(0, 0, 0, 0.54);
    font-size: 15px !important;
  }
  .u-lineHeightBase {
    line-height: 1.4 !important;
  }
  .u-inlineBlock {
    display: inline-block !important;
  }
  .middotDivider {
    padding-right: 0.3em;
    padding-left: 0.3em;
    font-size: 15px;
  }
  .u-paddingLeft4 {
    padding-left: 4px !important;
    & i {
      font-size: 11.5px;
      color: rgba(0, 0, 0, 0.54) !important;
    }
  }
  .ui-caption {
    --x-height-multiplier: 0.342 !important;
    --baseline-multiplier: 0.22 !important;
    font-family: 'medium-content-sans-serif-font', 'Lucida Grande',
      'Lucida Sans Unicode', 'Lucida Sans', Arial, sans-serif !important;
    letter-spacing: -0.02em !important;
    font-weight: 400 !important;
    font-style: normal !important;
    letter-spacing: 0 !important;
    font-size: 15px !important;
    line-height: 20px !important;
    -webkit-transform: translateY(1.8px);
    transform: translateY(1.8px);
  }
  .ui-caption {
    color: rgba(0, 0, 0, 0.54) !important;
    fill: rgba(0, 0, 0, 0.54) !important;
  }
  .u-backgroundCover {
    background-image: url(https://cdn-images-1.medium.com/fit/c/152/156/1*HKDooqfZX3gPtbywIn6yqg.png);
    background-position: 50% 50% !important;
    background-position: center !important;
    background-origin: border-box !important;
    background-size: cover !important;
  }
  .u-sizeFull {
    width: 100% !important;
    height: 100% !important;
  }
}
a {
  color: rgba(0, 0, 0, 0.84) !important;
  text-decoration: none !important;
  font-family: medium-content-sans-serif-font, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
    sans-serif !important;
}
a :hover {
  color: rgba(0, 0, 0, 0.84) !important;
  text-decoration: none !important;
}
</style>
