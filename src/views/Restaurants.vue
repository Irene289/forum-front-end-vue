<template>
  <div class="container py-5">
    <NavTabs />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
    <RestaurantsNavPills 
      :categories="categories"
    />

    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <RestaurantCard 
        v-for="restaurant in restaurants" :key="restaurant.id" :initial-restaurant="restaurant" 
      />
    </div>

    <!-- 分頁標籤 RestaurantPagination -->
    <RestaurantsPagination 
      v-if="totalPage.length > 1"
      :category-id="categoryId"
      :current-page="currentPage"
      :total-page="totalPage"
      :previous-page="previousPage"
      :next-page="nextPage"    
    />
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import RestaurantCard from "./../components/RestaurantCard"
import RestaurantsNavPills from './../components/RestaurantsNavPills'
import RestaurantsPagination from './../components/RestaurantsPagination'

const dummyData = {
  restaurants: [
    {
      id: 1,
      name: "Tremaine Simonis",
      tel: "1-513-898-9528 x7804",
      address: "04053 Waelchi View",
      opening_hours: "08:00",
      description: "Qui quasi dolores dolorem odio et possimus volupta",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=1.9479716780935519",
      viewCounts: 0,
      createdAt: "2022-04-18T08:11:33.000Z",
      updatedAt: "2022-04-18T08:11:33.000Z",
      CategoryId: 3,
      Category: {
        id: 3,
        name: "義大利料理",
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 2,
      name: "Rowan Eichmann",
      tel: "1-961-581-9817",
      address: "4169 Ernestine Radial",
      opening_hours: "08:00",
      description: "Laudantium qui placeat incidunt. Rerum consequatur",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=64.12501075551988",
      viewCounts: 0,
      createdAt: "2022-04-18T08:11:33.000Z",
      updatedAt: "2022-04-18T08:11:33.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 3,
      name: "Jamaal Batz",
      tel: "1-189-941-4365 x2028",
      address: "446 Kerluke Squares",
      opening_hours: "08:00",
      description: "Reiciendis non dolores ut quo rem aut maiores. Dol",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=77.62424942250317",
      viewCounts: 0,
      createdAt: "2022-04-18T08:11:33.000Z",
      updatedAt: "2022-04-18T08:11:33.000Z",
      CategoryId: 1,
      Category: {
        id: 1,
        name: "中式料理",
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 4,
      name: "Dr. Chance Orn",
      tel: "1-764-782-6230 x65454",
      address: "0493 Sallie Springs",
      opening_hours: "08:00",
      description: "Optio enim facere et.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=91.76171080682651",
      viewCounts: 0,
      createdAt: "2022-04-18T08:11:33.000Z",
      updatedAt: "2022-04-18T08:11:33.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 5,
      name: "Jamal Stracke",
      tel: "1-697-296-5399 x895",
      address: "1029 Muller Hills",
      opening_hours: "08:00",
      description: "Ut quod dignissimos corrupti voluptatem voluptatem",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=20.915990204369717",
      viewCounts: 0,
      createdAt: "2022-04-18T08:11:33.000Z",
      updatedAt: "2022-04-18T08:11:33.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 6,
      name: "Frederic Dietrich",
      tel: "742.754.2980 x177",
      address: "45693 Blake Bypass",
      opening_hours: "08:00",
      description: "Aut at inventore id.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=67.13754476825567",
      viewCounts: 0,
      createdAt: "2022-04-18T08:11:33.000Z",
      updatedAt: "2022-04-18T08:11:33.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 7,
      name: "Nathaniel Hirthe",
      tel: "117.319.8987 x9602",
      address: "208 Lora Haven",
      opening_hours: "08:00",
      description: "necessitatibus et voluptatibus",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=34.49267509879608",
      viewCounts: 0,
      createdAt: "2022-04-18T08:11:33.000Z",
      updatedAt: "2022-04-18T08:11:33.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 8,
      name: "Ms. Vada Ledner",
      tel: "1-709-888-9645 x51925",
      address: "371 Hackett Gardens",
      opening_hours: "08:00",
      description: "Beatae quaerat illo cum aperiam asperiores est.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=30.066771964395823",
      viewCounts: 0,
      createdAt: "2022-04-18T08:11:33.000Z",
      updatedAt: "2022-04-18T08:11:33.000Z",
      CategoryId: 4,
      Category: {
        id: 4,
        name: "墨西哥料理",
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 9,
      name: "Brandi Waters",
      tel: "(631) 367-5305 x687",
      address: "912 Isadore Ford",
      opening_hours: "08:00",
      description: "Ipsa nemo velit aut dolor id corrupti voluptatem. ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=72.38262122960224",
      viewCounts: 0,
      createdAt: "2022-04-18T08:11:33.000Z",
      updatedAt: "2022-04-18T08:11:33.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
    {
      id: 10,
      name: "Sunny Nicolas",
      tel: "463.180.9288 x457",
      address: "262 Dickinson Station",
      opening_hours: "08:00",
      description: "quod",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=68.57503523929678",
      viewCounts: 0,
      createdAt: "2022-04-18T08:11:33.000Z",
      updatedAt: "2022-04-18T08:11:33.000Z",
      CategoryId: 5,
      Category: {
        id: 5,
        name: "素食料理",
        createdAt: "2022-04-18T08:11:33.000Z",
        updatedAt: "2022-04-18T08:11:33.000Z",
      },
      isFavorited: false,
      isLiked: false,
    },
  ],
  categories: [
    {
      id: 1,
      name: "中式料理",
      createdAt: "2022-04-18T08:11:33.000Z",
      updatedAt: "2022-04-18T08:11:33.000Z",
    },
    {
      id: 2,
      name: "日本料理",
      createdAt: "2022-04-18T08:11:33.000Z",
      updatedAt: "2022-04-18T08:11:33.000Z",
    },
    {
      id: 3,
      name: "義大利料理",
      createdAt: "2022-04-18T08:11:33.000Z",
      updatedAt: "2022-04-18T08:11:33.000Z",
    },
    {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2022-04-18T08:11:33.000Z",
      updatedAt: "2022-04-18T08:11:33.000Z",
    },
    {
      id: 5,
      name: "素食料理",
      createdAt: "2022-04-18T08:11:33.000Z",
      updatedAt: "2022-04-18T08:11:33.000Z",
    },
    {
      id: 6,
      name: "美式料理",
      createdAt: "2022-04-18T08:11:33.000Z",
      updatedAt: "2022-04-18T08:11:33.000Z",
    },
    {
      id: 7,
      name: "複合式料理",
      createdAt: "2022-04-18T08:11:33.000Z",
      updatedAt: "2022-04-18T08:11:33.000Z",
    },
  ],
  categoryId: "",
  page: 1,
  totalPage: [1, 2, 3, 4, 5],
  prev: 1,
  next: 2,
};

export default {
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantsPagination,
  },
  data () {
    return {
      // 寫入預設值
      restaurants: [],
      categories: [],
      categoryId: -1, // 一定要來自後端，無法事先知道
      currentPage: 1, 
      totalPage: [],  // 一定要來自後端，無法事先知道
      previousPage: -1,
      nextPage: -1,
      users: {}
    }
  },
  created () {
    this.fetchRestaurants()
  },
  methods: {
    fetchRestaurants() {
      const { 
        restaurants, 
        categories, 
        categoryId, 
        page, 
        totalPage, 
        prev, 
        next 
      } = dummyData
      this.restaurants = restaurants
      this.categories = categories
      this.categoryId = categoryId
      this.currentPage = page
      this.totalPage = totalPage
      this.previousPage = prev
      this.nextPage = next
    },
  }
};
</script>