<template>
 <div class="container py-5">
    <!-- 餐廳表單 AdminRestaurantForm -->
    <AdminRestaurantForm 
      @after-submit="handleAfterSubmit"
    />
  </div>
</template>

<script>
import AdminRestaurantForm from './../components/AdminRestaurantForm'

export default {
  components: {
    AdminRestaurantForm,
  },
  methods: {
    handleAfterSubmit (formData) {
      // 透過 API 將表單資料送到伺服器
      for (let [name, value] of formData) {
        console.log(name + ': ' + value)
      }
    },
  }
}
</script>
