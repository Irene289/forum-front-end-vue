<template>
  <div class="col-md-6 col-lg-4">
    <div
      v-show="!isLoading" 
      class="card mb-4"
    >
      <img
        class="card-img-top"
        :src="restaurant.image | emptyImageFilter"
        alt="Card image cap"
        width="286px"
        height="180px"
        @load="changeLoading"
      >
      <div class="card-body">
        <p class="card-text title-wrap">
          <router-link 
            :to="{name: 'restaurant', params: { id: restaurant.id }}"
          >
            {{ restaurant.name }}  
          </router-link>
        </p>
        <span class="badge badge-secondary">{{ restaurant.Category.name }}</span>
        <p class="card-text text-truncate">
          {{ restaurant.description }}
        </p>
      </div>
      <div class="card-footer">
        <button
          v-if="restaurant.isFavorited"
          type="button"
          class="btn btn-danger btn-border favorite mr-2"
          :disabled="isProcessing"
          @click.stop.prevent="deleteFavorite(restaurant.id)"
        >
          移除最愛
        </button>
        <button
          v-else
          type="button"
          class="btn btn-primary btn-border favorite mr-2"
          :disabled="isProcessing"
          @click.stop.prevent="addFavorite(restaurant.id)"
        >
          加到最愛
        </button>
        <button
          v-if="restaurant.isLiked"
          type="button"
          class="btn btn-danger like mr-2"
          :disabled="isProcessing"
          @click.stop.prevent="deleteLiked(restaurant.id)"
        >
          Unlike
        </button>
        <button
          v-else
          type="button"
          class="btn btn-primary like mr-2"
          :disabled="isProcessing"
          @click.stop.prevent="addLiked(restaurant.id)"
        >
          Like
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from './../utils/mixins'
// STEP 1: 載入 API 方法和 Toast 提示工具
import usersAPI from './../apis/users'
import {Toast} from './../utils/helpers'

export default {
  name: 'RestaurantCard',
  mixins: [emptyImageFilter],
  props: {
    // 資料不可改
    initialRestaurant: {
      type: Object,
      required: true
    }
  },
  // data 的資料才可以改
  data () {
    return {
      restaurant: this.initialRestaurant,
      isLoading: true,
      isProcessing: false
    }
  }, 
  methods: {
    changeLoading () {
      this.isLoading = false
    },
    // STEP 2: 將 addFavorite 改成 async/await 語法
    async addFavorite (restaurantId) {
      try {
        this.isProcessing = true
        // STEP 3: 使用撰寫好的 addFavorite 方法去呼叫 API，並取得回傳內容
        const {data} = await usersAPI.addFavorite({restaurantId})

        // STEP 4: 若請求過程有錯，則進到錯誤處理
        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        // STEP 5: 請求成功的話，改變 Vue 內的資料狀態
        this.restaurant = {
          ...this.restaurant, // 解構賦值
          isFavorited: true
        }
        this.isProcessing = false
      } catch (error) {
        this.isProcessing = false
        // STEP 6: 請求失敗的話則跳出錯誤提示
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
        this.isProcessing = true
        const { data } = await usersAPI.deleteFavorite({ restaurantId })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.restaurant = {
          ...this.restaurant, // 解構賦值
          isFavorited: false
        }
        this.isProcessing = false
      } catch (error) {
        this.isProcessing = false
         console.log('Error', error)
        
          Toast.fire({
            icon: 'error',
            title: '無法移除最愛，請稍後再試'
          })
      }
    },
    async addLiked (restaurantId) {
      try { 
        this.isProcessing = true
        const { data } = await usersAPI.addLike({ restaurantId })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.restaurant = {
          ...this.restaurant, // 解構賦值
          isLiked: true
        }
        this.isProcessing = false
      } catch (error) {
        this.isProcessing = false
        console.log('Error', error)
        Toast.fire({
          icon: 'error',
          title: '無法按讚，請稍後再試'
        })
      }
    },
    async deleteLiked (restaurantId) {
      try {
        this.isProcessing = true
        const { data } = await usersAPI.deleteLike({ restaurantId })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.restaurant = {
          ...this.restaurant, // 解構賦值
          isLiked: false
        }
        this.isProcessing = false
      } catch (error) {
        this.isProcessing = false
        console.log('Error', error)
        Toast.fire({
          icon: 'error',
          title: '無法移除讚，請稍後再試'
        })
      }
    }
  }
}
</script>

<style scoped>
.badge.badge-secondary {
  padding: 0;
  margin: 8px 0;
  color: #bd2333;
  background-color: transparent;
}

.btn,
.btn-border.btn:hover {
  margin: 7px 14px 7px 0;
}

.card {
  margin-bottom: 2rem !important;
}
.card-img-top {
  background-color: #EFEFEF;
}

.card-body {
  padding: 17.5px;
}

.card-footer {
  padding: 9px 17.5px;
  border-color: rgb(232, 232, 232);
  background: white;
}
</style>
