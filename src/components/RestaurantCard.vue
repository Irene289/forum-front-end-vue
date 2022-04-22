<template>
  <div class="col-md-6 col-lg-4">
    <div class="card mb-4">
      <img
        class="card-img-top"
        :src="restaurant.image | emptyImageFilter"
        alt="Card image cap"
        width="286px"
        height="180px"
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
          type="button"
          class="btn btn-danger btn-border favorite mr-2"
          v-if="restaurant.isFavorited"
          @click.stop.prevent="deleteFavorite"
        >
          移除最愛
        </button>
        <button
          type="button"
          class="btn btn-primary btn-border favorite mr-2"
          v-else
          @click.stop.prevent="addFavorite"
        >
          加到最愛
        </button>
        <button
          type="button"
          class="btn btn-danger like mr-2"
          v-if="restaurant.isLiked"
          @click.stop.prevent="deleteLiked"
        >
          Unlike
        </button>
        <button
          type="button"
          class="btn btn-primary like mr-2"
          v-else
          @click.stop.prevent="addLiked"
        >
          Like
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from './../utils/mixins'

export default {
  name: 'RestaurantsCard',
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
      restaurant: this.initialRestaurant
    }
  }, 
  methods: {
    addFavorite () {
      this.restaurant = {
        ...this.restaurant, // 解構賦值
        isFavorited: true
      }
    },
    deleteFavorite () {
      this.restaurant = {
        ...this.restaurant, // 解構賦值
        isFavorited: false
      }
    },
    addLiked () {
      this.restaurant = {
        ...this.restaurant, // 解構賦值
        isLiked: true
      }
    },
    deleteLiked () {
      this.restaurant = {
        ...this.restaurant, // 解構賦值
        isLiked: false
      }
    }
  }
}
</script>
