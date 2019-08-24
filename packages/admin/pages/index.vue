<template>
  <div>
    <va-page-header>
      <div slot="breadcrumb">
        <va-breadcrumb separator="/">
          <va-breadcrumb-item v-for="item in breadcrumb" :key="item">{{ item }}</va-breadcrumb-item>
        </va-breadcrumb>
      </div>
    </va-page-header>
    <div slot="title">
      <h1>{{ breadcrumb[breadcrumb.length - 1] }}</h1>
    </div>
    <va-row :gutter="15">
      <va-column :md="3">
        <Card type="user" :number="user" />
      </va-column>
      <va-column :md="3">
        <Card type="article" :number="article" />
      </va-column>
      <va-column :md="3">
        <Card type="category" :number="category" />
      </va-column>
      <va-column :md="3">
        <Card type="tag" :number="tag" />
      </va-column>
    </va-row>
    <va-row :gutter="15">
      <va-column :md="8">
        <div class="chart-wrapper">
          <div class="top">
            <div class="title">Bài viết theo ngày</div>
            <div class="filter">30 ngày gần nhất</div>
          </div>
          <line-chart v-if="lineChart" :chart-data="lineChart" :height="200" />
        </div>
      </va-column>
      <va-column :md="4">
        <div class="chart-wrapper" v-if="pieChart">
          <div class="top">
            <div class="title">Bài viết theo chuyên mục</div>
          </div>
          <pie-chart :chart-data="pieChart" />
        </div>
      </va-column>
    </va-row>
    <va-row :gutter="15">
      <va-column :md="8"></va-column>
    </va-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import get from 'lodash.get'
import { format, subMonths } from 'date-fns'
import { Breadcrumb } from '@/components/commons'
import Card from '@/components/statistic/Card'
import { LineChart, PieChart } from '@/components/statistic/chart'
import { chartColors } from '@/constants/colors'

export default {
  components: {
    Breadcrumb,
    Card,
    LineChart,
    PieChart,
  },
  data: () => ({
    breadcrumb: ['Dashboard', 'Thống kê'],
  }),
  computed: {
    ...mapGetters({
      statistic: 'statistic/statistic',
    }),
    user() {
      return get(this.statistic, 'users.total', 0)
    },
    article() {
      return get(this.statistic, 'articles.total', 0)
    },
    category() {
      return get(this.statistic, 'categories.total', 0)
    },
    tag() {
      return get(this.statistic, 'tags.total', 0)
    },
    lineChart() {
      return (
        this.statistic && {
          labels: this.statistic.articles_by_days.map(item => item.date),
          datasets: [
            {
              label: 'Bài viết',
              data: this.statistic.articles_by_days.map(item => item.count),
              backgroundColor: '#0747a660',
              borderColor: '#0747a680',
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
  mounted() {
    const end = format(new Date(), 'yyyy-MM-dd')
    const start = format(subMonths(new Date(), 1), 'yyyy-MM-dd')
    this.$store.dispatch('statistic/run', {
      start,
      end,
    })
  },
}
</script>

<style lang="scss" scoped>
@import '@pubnow/ui/scss/_mixins.scss';
@import '@pubnow/ui/scss/_colors.scss';
@import '@pubnow/ui/scss/_sizes.scss';

.chart-wrapper {
  @include border;
  @include radius-sm;
  @include box-shadow-lg;
  padding: $unit;

  .top {
    display: flex;
    margin-bottom: $unit;
    .title {
      font-size: 18px;
      font-weight: 500;
      margin-right: auto;
      color: $b500;
    }
  }
}
</style>
