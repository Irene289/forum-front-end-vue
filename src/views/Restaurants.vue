<template>
  <div class="container py-5">
    <NavTabs />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
    <RestaurantsNavPills 
      :categories="categories"
    />

    <Spinner v-if="isLoading" />
    <template v-else>
      <div class="row">
        <!-- 餐廳卡片 RestaurantCard-->
        <RestaurantCard 
          v-for="restaurant in restaurants" 
          :key="restaurant.id" 
          :initial-restaurant="restaurant" 
        />
      </div>

      <!-- 分頁標籤 RestaurantPagination -->
      <RestaurantsPagination 
        v-if="totalPage.length > 1"
        :category-id="categoryId"
        :current-page="currentPage"
        :total-page="totalPage"
        :previous-page="previousPage"
        :next-page="nextPage"    
      />

      <!-- 處理空白頁面 -->
      <div v-if="restaurants.length < 1">無此類別資料</div>
    </template>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import RestaurantCard from "./../components/RestaurantCard"
import RestaurantsNavPills from './../components/RestaurantsNavPills'
import RestaurantsPagination from './../components/RestaurantsPagination'
import Spinner from './../components/Spinner'
import restaurantsAPI from './../apis/restaurants'
import {Toast} from './../utils/helpers'

export default {
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantsPagination,
    Spinner
  },
  data () {
    return {
      // 寫入預設值
      restaurants: [],
      categories: [],
      categoryId: -1, // 一定要來自後端，無法事先知道
      currentPage: 1, 
      totalPage: [],  // 一定要來自後端，無法事先知道
      previousPage: -1,
      nextPage: -1,
      users: {},
      isLoading: true
    }
  },
  created () {
    // this.fetchRestaurants({
    //   queryPage: 1,
    //   queryCategoryId: ''
    // })

    // console.log(this.$route.query)
    const { page = '', categoryId = '' } = this.$route.query
    this.fetchRestaurants({ queryPage: page, queryCategoryId: categoryId })

  },
  beforeRouteUpdate (to, from, next) {
    // console.log('beforeRouteUpdate', {to, from})
    const { page = '', categoryId = '' } = to.query
    this.fetchRestaurants({ queryPage: page, queryCategoryId: categoryId })
    next()
  },
  methods: {
    async fetchRestaurants({ queryPage, queryCategoryId }) {
      try {
        this.isLoading = true
        const response = await restaurantsAPI.getRestaurants({ 
          page: queryPage,
          categoryId: queryCategoryId
         })

        // console.log(response)
        // console.log(response.data)

        if (response.statusText !== 'OK') {
          throw new Error(response.statusText)
        }

          const { 
          restaurants, 
          categories, 
          categoryId, 
          page, 
          totalPage, 
          prev, 
          next 
        } = response.data

        this.restaurants = restaurants
        this.categories = categories
        this.categoryId = categoryId
        this.currentPage = page
        this.totalPage = totalPage
        this.previousPage = prev
        this.nextPage = next

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