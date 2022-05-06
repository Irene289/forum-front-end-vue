<template>
  <div class="container py-5">
    <Spinner v-if="isLoading" />
    <template v-else>
      <!-- 餐廳資訊頁 RestaurantDetail -->
      <RestaurantDetail
        :initial-restaurant= "restaurant"
      />
      <hr />
      <!-- 餐廳評論 RestaurantComments -->
      <RestaurantComments 
        :restaurant-comments= "restaurantComments"
        @after-delete-comment="afterDeleteComment"
      />
      <!-- 新增評論 CreateComment -->
      <CreateComment 
        :restaurant-id="restaurant.id"
        @after-create-comment="afterCreateComment"
      />
    </template>
  </div>
</template>

<script>
import RestaurantDetail from './../components/RestaurantDetail'
import RestaurantComments from './../components/RestaurantComments'
import CreateComment from './../components/CreateComment'
import Spinner from './../components/Spinner'
import restaurantsAPI from './../apis/restaurants'
import { Toast } from './../utils/helpers'
import { mapState } from 'vuex'

export default {
  name: 'Restaurant',
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment,
    Spinner
  },
  beforeRouteUpdate (to, from, next) {
    const { id } = to.params
    this.fetchRestaurant(id)
    next()
  },
  data () {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryName: '',
        image: '',
        openingHours: '',
        tel: '',
        address: '',
        description: '',
        isFavorited: false,
        isLiked: false
      },
      restaurantComments: [],
      isLoading: true
    }
  },
  created () {
    const { id: restaurantId } = this.$route.params
    this.fetchRestaurant(restaurantId)
  },
  methods: {
    async fetchRestaurant (restaurantId) {
      try {
        this.isLoading = true
        const { data } = await restaurantsAPI.getRestaurant({restaurantId})

        // console.log(data.status) // undefined
        if (data.status === 'error') {
          throw new Error(data.message)
        }

        // 解構賦值
        const { restaurant, isFavorited, isLiked } = data
        const { 
          id, 
          name, 
          Category, 
          image, 
          opening_hours, 
          tel, 
          address,
          description,
          Comments
        } = restaurant
        
        this.restaurant = {
          id,
          name,
          categoryName: Category.name,
          image, 
          openingHours: opening_hours,
          tel, 
          address,
          description,
          isFavorited, 
          isLiked,
        }
        this.restaurantComments = Comments
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳資訊，請稍後再試'
        })
      }
    },
    afterDeleteComment(commentId) {
      // console.log('afterDeleteComment', commentId)
      this.restaurantComments = this.restaurantComments.filter( comment => comment.id !== commentId)
    }, 
    afterCreateComment(payload) {
      const { commentId, text, restaurantId } = payload

      this.restaurantComments.push({
        id: commentId,
        text: text,
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name
        },
        RestaurantId: restaurantId,
        createdAt: new Date()
      })
    }
  },
  computed: {
    ...mapState(['currentUser'])
  }
}
</script>
