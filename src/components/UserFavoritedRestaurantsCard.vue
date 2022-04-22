<template>
  <div class="card">
    <div class="card-header"><strong>{{favoritedRestaurants.length}}</strong> 收藏的餐廳</div>
    <div class="card-body">
      <router-link 
        v-for="favoritedRest in favoritedRestaurants"
        :key="favoritedRest.id"
        :to="{name: 'restaurant', params: {id: favoritedRest.Favorite.RestaurantId}}"
      >
        <img
          :src="favoritedRest.image | emptyImageFilter"
          width="60"
          height="60"
          class="avatar m-1"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from './../utils/mixins'

export default {
  mixins: [emptyImageFilter],
  props: {
    favoritedRestaurants: {
      type: Array,
      required: true
    }
  }
}
</script>