<template>
  <div class="container py-5">
    <AdminRestaurantForm 
      @after-submit="handleAfterSubmit"
      :initial-restaurant="restaurant" 
    />
  </div>
</template>

<script>
import AdminRestaurantForm from "./../components/AdminRestaurantForm.vue";

const dummyData = {
  restaurant: {
    id: 1,
    name: "Laurence Reynolds",
    tel: "1-657-067-3756 x9782",
    address: "187 Kirlin Squares",
    opening_hours: "08:00",
    description: "sit est mollitia",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=91.29816290184887",
    viewCounts: 1,
    createdAt: "2019-07-30T16:24:55.432Z",
    updatedAt: "2019-07-30T17:26:43.260Z",
    CategoryId: 3,
    Category: {
      id: 3,
      name: "義大利料理",
      createdAt: "2019-07-30T16:24:55.429Z",
      updatedAt: "2019-07-30T16:24:55.429Z",
    },
  },
}

export default {
  components: {
    AdminRestaurantForm,
  },
  data () {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryId: '',
        tel: '',
        address: '',
        openingHours: '',
        description: '',
        image: ''
      },
    }
  },
  created () {
    const { id } = this.$route.params
    this.fetchRestaurant(id)
  }, 
  methods: {
    fetchRestaurant (restaurantId) {
      console.log('fetchRestaurant id:', restaurantId)

      const { restaurant } = dummyData
      const {
        id,
        name,
        tel,
        address,
        opening_hours,
        description,
        image,
        CategoryId
      } = restaurant

      this.restaurant = {
        ...this.restaurant,
        id,
        name,
        tel,
        address,
        openingHours: opening_hours,
        description,
        image,
        CategoryId,
      }
    },
    handleAfterSubmit(formData) {
      // 透過 API 將表單資料送到伺服器
      for (let [name, value] of formData.entries()) {
        console.log(name + ": " + value);
      }
    },
  },
}
</script>