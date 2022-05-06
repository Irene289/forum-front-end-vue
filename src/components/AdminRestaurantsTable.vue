<template>
  <Spinner v-if="isLoading" />
  <table v-else class="table">
    <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Category</th>
        <th scope="col">Name</th>
        <th scope="col" width="300">操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="restaurant in restaurants" :key="restaurant.id">
        <th scope="row">
          {{ restaurant.id }}
        </th>
        <td>{{ restaurant.Category ? restaurant.Category.name : "未分類" }}</td>
        <td>{{ restaurant.name }}</td>
        <td class="d-flex justify-content-between">
          <router-link 
            :to="{ name: 'admin-restaurant', params: { id: restaurant.id }}" 
            class="btn btn-link"
          >
            Show
          </router-link>

          <router-link 
            :to="{ name: 'admin-restaurant-edit', params: { id: restaurant.id }}" 
            class="btn btn-link"
          >
            Edit
          </router-link>

          <button 
            @click.stop.prevent="deleteRestaurant(restaurant.id)"
            type="button" 
            class="btn btn-link"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import Spinner from './../components/Spinner'
import adminAPI from './../apis/admin'
import { Toast } from './../utils/helpers'

export default {
  components: {
    Spinner
  },
  data() {
    return {
      restaurants: [],
      isLoading: true
    }
  },
  created() {
    this.fetchRestaurants();
  },
  methods: {
    async fetchRestaurants() {
      try {
        this.isLoading = true
        const { data } = await adminAPI.restaurants.get()

        this.restaurants = data.restaurants
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        console.log('Error', error)
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳資料'
        })
      }
    },
    async deleteRestaurant(restaurantId) {
      try {
        const { data } = await adminAPI.restaurants.delete({ restaurantId })
        
        if (data.status !== 'success') {
          throw new Error(data.message)
        } 

        // console.log(data)

        this.restaurants = this.restaurants.filter(restaurant => restaurant.id !== restaurantId)

      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳資料'
        })
      }
    }
  },
};
</script>