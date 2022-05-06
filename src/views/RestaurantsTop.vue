<template>
  <div class="container py-5">
    <NavTabs />
    <Spinner v-if="isLoading" />
    <template v-else>
      <h1 class="mt-5">人氣餐廳</h1>

      <hr />
      <div 
        class="card mb-3" 
        style="max-width: 540px; margin: auto"
        v-for="restaurant in restaurants"
        :key="restaurant.id"
      >
        <div class="row no-gutters">
          <div class="col-md-4">
            <router-link 
              :to="{name: 'restaurant', params: { id: restaurant.id }}"
            >
              <img
                class="card-img"
                :src="restaurant.image | emptyImageFilter"
              />
            </router-link>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">
                {{restaurant.name}}
              </h5>
              <span class="badge badge-secondary">收藏數：{{restaurant.FavoriteCount}}</span>
              <p class="card-text">
                {{restaurant.description}}
              </p>
              <router-link 
                :to="{ name: 'restaurant', params: { id: restaurant.id }}" 
                class="btn btn-primary mr-2"
              >
                Show
              </router-link>

              <button
                v-if="restaurant.isFavorited"
                type="button"
                class="btn btn-danger mr-2"
                @click.stop.prevent="deleteFavorite(restaurant.id)"
              >
                移除最愛
              </button>
              <button
                v-else
                type="button"
                class="btn btn-primary"
                @click.stop.prevent="addFavorite(restaurant.id)"
              >
                加到最愛
              </button>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>


<script>
import { emptyImageFilter } from './../utils/mixins'
import NavTabs from './../components/NavTabs'
import Spinner from './../components/Spinner'
import usersAPI from './../apis/users'
import restaurantsAPI from './../apis/restaurants'
import {Toast} from './../utils/helpers'

export default {
  mixins: [emptyImageFilter],
  components: {
    NavTabs,
    Spinner
  },
  data () {
    return {
      restaurants: [],
      isLoading: true
    }
  },
  created () {
    this.fetchRestaurants()
  },
  methods: {
    async fetchRestaurants() {
      try {
        this.isLoading = true
        const response = await restaurantsAPI.getTopRestaurants()

        // console.log(response)

        if (response.statusText !== 'OK') {
          throw new Error(response.statusText)
        }

        this.restaurants = response.data.restaurants
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        console.log('Error', error)
        // 給使用者的提示
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳資料，請稍後再試'
        })
      }
    },
    async addFavorite (restaurantId) {
      try {
        const {data} = await usersAPI.addFavorite({ restaurantId })

        console.log(restaurantId)

        // 若請求過程有錯，則進到錯誤處理
        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.restaurants = this.restaurants
          .map(restaurant => {
            if (restaurant.id !== restaurantId) {
              return restaurant
            }
            return {
              ...restaurant,
              FavoriteCount: restaurant.FavoriteCount + 1,
              isFavorited: true
            }
          })


        // this.restaurants = {
        //   ...restaurants, // 解構賦值
        //   isFavorited: true
        // }

      } catch (error) {
        console.log('Error', error)
        // 給使用者的提示
          Toast.fire({
            icon: 'error',
            title: '無法加入最愛，請稍後再試'
          })
      }
    },
    async deleteFavorite (restaurantId) {
      try {
        const {data} = await usersAPI.deleteFavorite({restaurantId})

        console.log(restaurantId)

        // 若請求過程有錯，則進到錯誤處理
        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.restaurants = this.restaurants
          .map(restaurant => {
            if (restaurant.id !== restaurantId) {
              return restaurant
            }
            return {
              ...restaurant,
              FavoriteCount: restaurant.FavoriteCount - 1,
              isFavorited: false
            }
          })

        // this.restaurants = {
        //   ...restaurants, // 解構賦值
        //   isFavorited: false
        // }
      } catch (error) {
        console.log('Error', error)
        // 給使用者的提示
          Toast.fire({
            icon: 'error',
            title: '無法移除最愛，請稍後再試'
          })
      }
    },
  }
};
</script>