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
      <va-column :xs="12" :sm="6" :md="3">
        <va-input placeholder="Tìm kiếm bài viết"></va-input>
      </va-column>
    </va-row>
    <va-row>
    <va-column :xs="12">
        <va-table size="lg">
          <b-table :fields="fields" :items="articles" responsive>
            <template slot="HEAD_checkBox">
              <div />
            </template>
            <template slot="checkBox">
              <b-form-checkbox></b-form-checkbox>
            </template>
            <template slot="avatarauthor" slot-scope="data">
              <img :src="data.item.avatar" alt="avatar" style="width: 36px; height: 36px; border-radius: 18px;"> 
              <span>{{ data.item.author }}</span>
            </template>
          </b-table>
        </va-table>
      </va-column>
    </va-row>
  </div>
</template>

<script>
import { Breadcrumb } from '@/components/commons'

export default {
  components: {
    Breadcrumb,
  },
  data: () => ({
    breadcrumb: ['Dashboard', 'Bài viết'],
    fields: [
      'checkBox',
      { key: 'name', label: 'Tên bài viết' },
      'slug',
      { key: 'avatarauthor', label: 'Tác giả' },
      { key: 'article', label: 'Chuyên mục' },
      { key: 'view', label: 'Lượt view' },
    ],
    articles: [
      {
        name: 'Cuộc sống rất giống cuộc đời',
        slug: 'cuoc-song-rat-giong-cuoc-doi',
        avatar: 'https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-9/32789851_1669417253172997_1743328170339205120_n.jpg?_nc_cat=110&_nc_oc=AQkOgwW6A37Y-TeD1CqaloQ4eQ6FnO3GWpjLX7IxdPlvGBmLMbCsYUjds7FC6QQ-HsE&_nc_ht=scontent.fhan2-4.fna&oh=020ca602d2d0ed83ea72bbca4c402984&oe=5DB936D6',
        author: 'dacsang97',
        article: 'Chia sẻ',
        view: '2',
      },
      {
        name: 'Đắc nhân tâm',
        slug: 'dac-nhan-tam',
        avatar: 'https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-9/32789851_1669417253172997_1743328170339205120_n.jpg?_nc_cat=110&_nc_oc=AQkOgwW6A37Y-TeD1CqaloQ4eQ6FnO3GWpjLX7IxdPlvGBmLMbCsYUjds7FC6QQ-HsE&_nc_ht=scontent.fhan2-4.fna&oh=020ca602d2d0ed83ea72bbca4c402984&oe=5DB936D6',
        author: 'dacsang97',
        article: 'Chia sẻ',
        view: '2',
      },
      {
        name: 'Xui thì chịu thôi',
        slug: 'xui-thi-chiu-thoi',
        avatar: 'https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-9/32789851_1669417253172997_1743328170339205120_n.jpg?_nc_cat=110&_nc_oc=AQkOgwW6A37Y-TeD1CqaloQ4eQ6FnO3GWpjLX7IxdPlvGBmLMbCsYUjds7FC6QQ-HsE&_nc_ht=scontent.fhan2-4.fna&oh=020ca602d2d0ed83ea72bbca4c402984&oe=5DB936D6',
        author: 'dacsang97',
        article: 'Chia sẻ',
        view: '2',
      },
    ],
  }),
}
</script>
