<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>

    <hr />
    <div class="card mb-3" style="max-width: 540px; margin: auto">
      <RestaurantTop 
        :initial-restaurant="restaurant"
        v-for="restaurant in restaurants"
        :key="restaurant.id"
      />
    </div>
  </div>
</template>


<script>
import NavTabs from "./../components/NavTabs";
import RestaurantTop from './../components/RestaurantTop'

const dummyData = {
  restaurants: [
    {
      id: 50,
      name: "Henriette Kutch",
      tel: "641-182-5635 x784",
      address: "9574 Steuber Springs",
      opening_hours: "08:00",
      description: "Eaque omnis expedita non. Ullam ut et consequatur ",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=16.179129340354727",
      viewCounts: 0,
      createdAt: "2022-04-18T08:11:33.000Z",
      updatedAt: "2022-04-18T08:11:33.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 49,
      name: "Percival Trantow",
      tel: "(926) 870-4612 x039",
      address: "9026 Theo Island",
      opening_hours: "08:00",
      description: "Molestiae veritatis ipsum et voluptatem.\nVel sit v",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=22.773925921418158",
      viewCounts: 0,
      createdAt: "2022-04-18T08:11:33.000Z",
      updatedAt: "2022-04-18T08:11:33.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 48,
      name: "Emmitt Hickle",
      tel: "1-676-822-7544 x00137",
      address: "016 Johathan Street",
      opening_hours: "08:00",
      description: "Excepturi porro velit quia.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=97.32541440737077",
      viewCounts: 0,
      createdAt: "2022-04-18T08:11:33.000Z",
      updatedAt: "2022-04-18T08:11:33.000Z",
      CategoryId: 4,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 47,
      name: "Lonny Bernhard",
      tel: "(766) 481-7382 x2808",
      address: "9929 Kiley Terrace",
      opening_hours: "08:00",
      description: "accusamus optio ut",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=99.06752313567053",
      viewCounts: 0,
      createdAt: "2022-04-18T08:11:33.000Z",
      updatedAt: "2022-04-18T08:11:33.000Z",
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 46,
      name: "Alejandrin Mosciski",
      tel: "340.801.4507 x7607",
      address: "269 Lamar Extension",
      opening_hours: "08:00",
      description: "Ut a illum aliquam mollitia ipsa nobis ut repellen",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=72.36450088514148",
      viewCounts: 0,
      createdAt: "2022-04-18T08:11:33.000Z",
      updatedAt: "2022-04-18T08:11:33.000Z",
      CategoryId: 3,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 45,
      name: "Aryanna Kautzer",
      tel: "1-660-914-5126 x5410",
      address: "20595 Carlos Tunnel",
      opening_hours: "08:00",
      description: "Iusto a saepe dolor repellat. Optio esse odio veli",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=75.39716817289931",
      viewCounts: 0,
      createdAt: "2022-04-18T08:11:33.000Z",
      updatedAt: "2022-04-18T08:11:33.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 44,
      name: "Emanuel Ferry DDS",
      tel: "(835) 205-4133",
      address: "73752 Herminia River",
      opening_hours: "08:00",
      description: "Sit impedit labore. Voluptatem quas asperiores vit",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=43.485999584282034",
      viewCounts: 0,
      createdAt: "2022-04-18T08:11:33.000Z",
      updatedAt: "2022-04-18T08:11:33.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 43,
      name: "Elliot Upton II",
      tel: "247-639-3380",
      address: "3362 Clare Bypass",
      opening_hours: "08:00",
      description: "est assumenda corporis",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=13.153234490631549",
      viewCounts: 0,
      createdAt: "2022-04-18T08:11:33.000Z",
      updatedAt: "2022-04-18T08:11:33.000Z",
      CategoryId: 2,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 42,
      name: "Jennifer Reilly",
      tel: "084-224-3461",
      address: "54516 Jon Centers",
      opening_hours: "08:00",
      description: "Vel quia et totam commodi animi. Nulla accusamus e",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=41.76889333645786",
      viewCounts: 0,
      createdAt: "2022-04-18T08:11:33.000Z",
      updatedAt: "2022-04-18T08:11:33.000Z",
      CategoryId: 1,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 41,
      name: "Mrs. Gust Braun",
      tel: "075-613-1550 x98023",
      address: "71914 Richard Lodge",
      opening_hours: "08:00",
      description: "Accusamus animi magnam. Omnis maxime assumenda sin",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=11.039920978260142",
      viewCounts: 0,
      createdAt: "2022-04-18T08:11:33.000Z",
      updatedAt: "2022-04-18T08:11:33.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
  ],
};

export default {
  components: {
    NavTabs,
    RestaurantTop,
  },
  data () {
    return {
      restaurants: []
    }
  },
  created () {
    this.fetchRestaurants()
  },
  methods: {
    fetchRestaurants() {
      this.restaurants = dummyData.restaurants
    },

  }
};
</script>