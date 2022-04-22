<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </span>
    </div>

    <hr />

    <ul>
      <li>評論數： {{ restaurant.commentsLength }} </li>
      <li>瀏覽次數： {{ restaurant.viewCounts }} </li>
    </ul>

    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>

<script>

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
    updatedAt: "2022-04-21T05:55:50.000Z",
    CategoryId: 3,
    Category: {
      id: 3,
      name: "義大利料理",
      createdAt: "2022-04-18T08:11:33.000Z",
      updatedAt: "2022-04-18T08:11:33.000Z",
    },
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
};

export default {
  name: 'RestaurantDashboard',
  data () {
    return {
      restaurant: {
        id: -1,
        name: '',
        categoryName: '',
        commentsLength: -1,
        viewCounts: -1,
      },
    }
  },
  created () {
    const { id: restaurantId } = this.$route.params
    this.fetchRestaurant(restaurantId)
  },
  methods: {
    fetchRestaurant(restaurantId) {
      console.log('fetchRestaurant id: ', restaurantId)

      // this.restaurant = {
      //   id: dummyData.restaurant.id,
      //   name: dummyData.restaurant.name,
      //   categoryName: dummyData.restaurant.Category.name,
      //   commentsLength: dummyData.restaurant.Comments.length,
      //   viewCounts: dummyData.restaurant.viewCounts
      // }
      
      // 使用解構賦值
      const {id, name, Category, Comments, viewCounts} = dummyData.restaurant
      this.restaurant = {
        id,
        name,
        categoryName: Category.name,
        commentsLength: Comments.length,
        viewCounts,
      }
    }
  }
}
</script>
