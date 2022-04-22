<template>
  <div class="card">
    <div class="card-header">
      最新餐廳
    </div>
    <div class="card-body">
      <div v-for="restaurant in restaurants" :key="restaurant.id">
        <h4>
          <router-link 
            :to="{name: 'restaurant', params: { id: restaurant.id }}">
            {{ restaurant.name }}  
          </router-link>
          <small>{{ restaurant.Category.name ? restaurant.Category.name : '未分類' }}</small>
        </h4>
        <p>{{ restaurant.description }}</p>
        {{ restaurant.createdAt | fromNow }}
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
// 先將 moment 載入進來
import {fromNowFilter} from './../utils/mixins'

export default {
  props: {
    restaurants: {
      type: Array,
      required: true
    }
  },
  mixins: [fromNowFilter],
}
</script>


<style scoped>
small {
  font-size: 10px;
}
</style>