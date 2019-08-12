<template>
  <b-container class="mb-5">
    <b-row v-if="statistic" class="no-gutters">
      <b-col md="8">
        <line-chart :chart-data="lineChart" :height="200" />
      </b-col>
      <b-col md="4" class="pl-2">
        <StatisticCard type="article" icon="file" :number="articleCount" name="Bài viết" />
        <StatisticCard type="member" icon="user" :number="memberCount" name="Thành viên" />
        <div>
          <h2 class="my-3">Thành viên nổi bật</h2>
          <StatisticMember v-for="member in featuredMember" :key="member.id" :member="member" />
        </div>
      </b-col>
    </b-row>
    <b-row class="no-gutters mt-3">
      <b-col md="8">
        <div>
          <h2 class="mb-3">Bài viết hấp dẫn</h2>
          <StatisticArticle
            v-for="article in featuredArticles"
            :key="article.id"
            :article="article"
          />
        </div>
      </b-col>
      <b-col md="4" class="pl-2">
        <pie-chart :chart-data="pieChart" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex'
import { format, subDays, subWeeks } from 'date-fns'
import LineChart from '@/components/organization/overview/LineChart'
import PieChart from '@/components/organization/overview/PieChart'
import {
  StatisticCard,
  StatisticMember,
  StatisticArticle,
} from '@/components/organization'
import { chartColors } from '@/constants/colors'

export default {
  layout: 'organization',
  components: {
    LineChart,
    PieChart,
    StatisticCard,
    StatisticMember,
    StatisticArticle,
  },
  computed: {
    ...mapGetters({
      org: 'organization/organization',
      statistic: 'organization/statistic',
    }),
    articleCount() {
      if (this.statistic) {
        return this.statistic.articles_count
      }
      return 0
    },
    memberCount() {
      if (this.statistic) {
        return this.statistic.members_count
      }
      return 0
    },
    featuredMember() {
      if (this.statistic) {
        return this.statistic.featured_member
      }
      return []
    },
    featuredArticles() {
      if (this.statistic) {
        return this.statistic.featured_article
      }
      return []
    },
    lineChart() {
      return (
        this.statistic && {
          labels: this.statistic.articles_by_day.map(item => item.date),
          datasets: [
            {
              label: 'Bài viết',
              data: this.statistic.articles_by_day.map(item => item.count),
              backgroundColor: chartColors[0],
            },
          ],
        }
      )
    },
    pieChart() {
      return (
        this.statistic && {
          labels: this.statistic.articles_by_category.map(
            item => item.category.name,
          ),
          datasets: [
            {
              label: 'Bài viết',
              data: this.statistic.articles_by_category.map(item => item.count),
              backgroundColor: this.statistic.articles_by_category.map(
                (_, id) => chartColors[id],
              ),
            },
          ],
        }
      )
    },
  },
  head() {
    return {
      title:
        (this.org && `Quản lý tổ chức - ${this.org.name}`) || 'Quản lý tổ chức',
    }
  },
  mounted() {
    const { orgname } = this.$route.params
    const end = format(new Date(), 'yyyy-MM-dd')
    const start = format(subWeeks(new Date(), 1), 'yyyy-MM-dd')
    this.$store.dispatch('organization/statistic', {
      slug: orgname,
      start,
      end,
    })
  },
}
</script>
