<template>
  <div class="container py-5">
    <NavTabs />
    <Spinner v-if="isLoading" />
    <template v-else>
      <h1 class="mt-5">最新動態</h1>
      <hr />
      <div class="row">
        <div class="col-md-6">
          <h3>最新餐廳</h3>
          <!-- 最新餐廳 NewestRestaurants -->
          <NewestRestaurants :restaurants="restaurants" />
        </div>
        <div class="col-md-6">
          <h3>最新評論</h3>
          <!-- 最新評論 NewestComments-->
          <NewestComments :comments="comments" />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs"
import NewestRestaurants from "./../components/NewestRestaurants"
import NewestComments from "./../components/NewestComments"
import Spinner from './../components/Spinner'
import restaurantsAPI from './../apis/restaurants'
import {Toast} from './../utils/helpers'

export default {
  name: 'RestaurantsFeeds', // 取跟檔名一樣的名字
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments,
    Spinner
  },
  data() {
    return {
      restaurants: [],
      comments: [],
      isLoading: true
    }
  },
  created () {
    this.fetchFeeds()
  },
  methods: {
    async fetchFeeds () {
      // fetch API
      try {
        this.isLoading = true
        const response = await restaurantsAPI.getFeeds()

        // console.log(response)
        // 洗髒資料
      this.restaurants = response.data.restaurants
      this.comments = response.data.comments.filter( comment => comment.text && comment.Restaurant.name )
      this.isLoading = false
      } catch (error) {
        this.isLoading = false
        // 給使用者的提示
          Toast.fire({
            icon: 'error',
            title: '無法取得餐廳資料，請稍後再試'
          })
          console.log('Error', error)
      }
    }
  }
};
</script>
