<template>
  <div class="home-page">
    <div class="container">
      <b-row>
        <b-col md="4">
          <card-vertical-home
            title="Your Focus Is Priceless. Stop Giving It Away."
            shortyBody="This is the eyeball economy, and your eyeballs are for sale"
            authorName="Mark Allen"
            groupName="Force"
            doc="June 19"
            timeReading="7 min read"
          />
        </b-col>
        <b-col md="4">
          <card-horizontal-home
            v-for="i in 3"
            :key="i"
            title="Your Focus Is Priceless. Stop Giving It Away. it is the eyeball economy."
            shortyBody="This is the eyeball economy, and your eyeballs are for sale"
            authorName="Mark Allen"
            groupName="Force"
            doc="June 19"
            timeReading="7 min read"
          />
        </b-col>
        <b-col md="4">
          <card-vertical-home
            title="Your Focus Is Priceless. Stop Giving It Away."
            shortyBody="This is the eyeball economy, and your eyeballs are for sale"
            authorName="Mark Allen"
            groupName="Force"
            doc="June 19"
            timeReading="7 min read"
          />
        </b-col>
      </b-row>
      <div class="line-split-section" />
      <b-row>
        <b-col md="4">
          <div class="basedon mb-1">Top popular on Pubnow</div>
          <card-horizontal-home
            v-for="i in 3"
            :key="i"
            title="Your Focus Is Priceless. Stop Giving It Away. it is the eyeball economy."
            shortyBody="This is the eyeball economy, and your eyeballs are for sale"
            authorName="Mark Allen"
            groupName="Force"
            doc="June 19"
            timeReading="7 min read"
          />
        </b-col>
        <b-col md="8">
          <card-vertical-text
            v-for="i in 20"
            :key="i"
            categoryName="BASED ON YOUR READING HISTORY"
            title="Your Focus Is Priceless. Stop Giving It Away. Your Focus Is Priceless. Stop Giving It Away."
            shortyBody="This is the eyeball economy, and your eyeballs are for sale"
            authorName="Mark Allen"
            groupName="Force"
            doc="June 19"
            timeReading="7 min read"
          />
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import {
  CardVerticalHome,
  CardHorizontalHome,
  CardVerticalText,
} from '../components/common'
export default {
  components: {
    CardVerticalHome,
    CardHorizontalHome,
    CardVerticalText,
  },
  asyncData() {
    console.log(process.env)
  },
}
</script>

<style>
.home-page {
  padding: 30px 0;
}
.line-split-section {
  height: 1px;
  width: 100%;
  color: #949494;
  margin: 20px 0;
}
.basedon {
  color: #949494;
  font-size: 18px;
}
</style>
