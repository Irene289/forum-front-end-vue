<template>
  <div class="container py-5">
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
  </div>
</template>

<script>
import RestaurantDetail from './../components/RestaurantDetail'
import RestaurantComments from './../components/RestaurantComments'
import CreateComment from './../components/CreateComment'

const dummyData = {
  restaurant: {
    id: 1,
    name: "Tremaine Simonis",
    tel: "1-513-898-9528 x7804",
    address: "04053 Waelchi View",
    opening_hours: "08:00",
    description:
      "Qui quasi dolores dolorem odio et possimus voluptatem et. Soluta facere tempora porro autem tempora quasi. Deleniti debitis sint corporis laudantium necessitatibus numquam deserunt et quidem. Quis ut vel alias ipsa ipsam. Quis molestiae natus sequi commodi et quasi porro id. Et maxime consequuntur fugit vel dolor.\n \rBlanditiis sint cumque ullam dolor nesciunt maiores aut. Ut explicabo cupiditate officiis. Ipsa modi labore impedit sit placeat odit dolores qui. Velit quasi voluptatem nisi odio.\n \rDoloremque aperiam itaque illum in error inventore sit hic. Quia vel dolorum molestiae quos. Autem debitis est eum impedit voluptatibus ipsam eius voluptatem. Rerum iste ipsum nam vero ratione aliquam harum modi.",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=1.9479716780935519",
    viewCounts: 1,
    createdAt: "2022-04-18T08:11:33.000Z",
    updatedAt: "2022-04-21T05:55:50.819Z",
    CategoryId: 3,
    Category: {
      id: 3,
      name: "義大利料理",
      createdAt: "2022-04-18T08:11:33.000Z",
      updatedAt: "2022-04-18T08:11:33.000Z",
    },
    FavoritedUsers: [],
    LikedUsers: [],
    Comments: [
      {
        id: 51,
        text: "Omnis repellat voluptas.",
        UserId: 1,
        RestaurantId: 1,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
        User: {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$/pJLK/1.61hJO9f7H3HKQOqSU5ERyiLzimg/e1WfnlPdoIqLv89ta",
          isAdmin: true,
          image: null,
          createdAt: "2022-04-18T08:11:33.000Z",
          updatedAt: "2022-04-18T08:11:33.000Z",
        },
      },
      {
        id: 1,
        text: "Ea accusantium nihil.",
        UserId: 3,
        RestaurantId: 1,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
        User: {
          id: 3,
          name: "user2",
          email: "user2@example.com",
          password:
            "$2a$10$ztyApNPvWeiSXqh/lATloetDBDyvSxd5W8CiYnykvd2K8KuN7gMAK",
          isAdmin: false,
          image: null,
          createdAt: "2022-04-18T08:11:33.000Z",
          updatedAt: "2022-04-18T08:11:33.000Z",
        },
      },
      {
        id: 101,
        text: "Alias explicabo voluptatem ullam ea mollitia atque nulla.",
        UserId: 3,
        RestaurantId: 1,
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
        User: {
          id: 3,
          name: "user2",
          email: "user2@example.com",
          password:
            "$2a$10$ztyApNPvWeiSXqh/lATloetDBDyvSxd5W8CiYnykvd2K8KuN7gMAK",
          isAdmin: false,
          image: null,
          createdAt: "2022-04-18T08:11:33.000Z",
          updatedAt: "2022-04-18T08:11:33.000Z",
        },
      },
    ],
  },
  isFavorited: false,
  isLiked: false,
}
const dummyUser = {
  currentUser: {
    id: 1,
    name: '管理者',
    email: 'root@example.com',
    image: 'https://i.pravatar.cc/300',
    isAdmin: true
  },
  isAuthenticated: true
}

export default {
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment
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
      currentUser: dummyUser.currentUser
    }
  },
  created () {
    const { id: restaurantId } = this.$route.params
    this.fetchRestaurant(restaurantId)
  },
  methods: {
    fetchRestaurant(restaurantId) {
      console.log('fetchRestaurant id: ', restaurantId)

      // 解構賦值
      const { restaurant, isFavorited, isLiked } = dummyData
      
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
  }
}
</script>
