<template>
  <div class="row">
    <div class="col-md-12 mb-3">
      <h1>{{restaurant.name}}</h1>
      <p class="badge badge-secondary mt-1 mb-3">
        {{restaurant.categoryName}}
      </p>
    </div>
    <div class="col-lg-4">
      <img
        class="img-responsive center-block" 
        :src="restaurant.image | emptyImageFilter"
        style="width: 250px;margin-bottom: 25px;"
      >
      <div class="contact-info-wrap">
        <ul class="list-unstyled">
          <li>
            <strong>Opening Hour:</strong>
            {{restaurant.openingHours}}
          </li>
          <li>
            <strong>Tel:</strong>
            {{restaurant.tel}}
          </li>
          <li>
            <strong>Address:</strong>
            {{restaurant.address}}
          </li>
        </ul>
      </div>
    </div>
    <div class="col-lg-8">
      <p>{{ restaurant.description }}</p>
      <router-link
        class="btn btn-primary btn-border mr-2"
        :to="{name: 'restaurant-dashboard', params: {id: restaurant.id}}"
      >
        Dashboard
      </router-link>

      <button
        v-if="restaurant.isFavorited"
        @click.stop.prevent="deleteFavorite"
        type="button"
        class="btn btn-danger btn-border mr-2"
      >
        移除最愛
      </button>
      <button
        v-else
        @click.stop.prevent="addFavorite"
        type="button"
        class="btn btn-primary btn-border mr-2"
      >
        加到最愛
      </button>
      <button
        v-if="restaurant.isLiked"
        @click.stop.prevent="deleteLiked"
        type="button"
        class="btn btn-danger like mr-2"
      >
        Unlike
      </button>
      <button
        v-else
        @click.stop.prevent="addLiked"
        type="button"
        class="btn btn-primary like mr-2"
      >
        Like
      </button>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from './../utils/mixins'

export default {
  name: 'RestaurantDetail',
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
