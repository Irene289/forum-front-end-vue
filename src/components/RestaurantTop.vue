<template>
  <div class="row no-gutters">
    <div class="col-md-4">
      <a href="#">
        <img
          class="card-img"
          :src="restaurant.image | emptyImageFilter"
        />
      </a>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{restaurant.name}}</h5>
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
          @click.stop.prevent="deleteFavorite(restaurant.id)"
          type="button" 
          class="btn btn-danger mr-2"
        >
          移除最愛
        </button>
        <button 
          v-else
          @click.stop.prevent="addFavorite(restaurant.id)"
          type="button" 
          class="btn btn-primary"
        >
          加到最愛
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from './../utils/mixins'
import usersAPI from './../apis/users'
import {Toast} from './../utils/helpers'

export default {
  name: 'RestaurantTop',
  mixins: [emptyImageFilter],
  props: {
    initialRestaurant: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      restaurant: this.initialRestaurant
    }
  }, 
  methods: {
    async addFavorite (restaurantId) {
      try {
        const {data} = await usersAPI.addFavorite({restaurantId})

        // 若請求過程有錯，則進到錯誤處理
        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.restaurant = {
          ...this.restaurant, // 解構賦值
          isFavorited: true
        }
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
        const {data} = await usersAPI.addFavorite({restaurantId})

        // 若請求過程有錯，則進到錯誤處理
        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.restaurant = {
          ...this.restaurant, // 解構賦值
          isFavorited: false
        }
      } catch (error) {
        console.log('Error', error)
        // 給使用者的提示
          Toast.fire({
            icon: 'error',
            title: '無法加入最愛，請稍後再試'
          })
      }
    },
  }
}
</script>
