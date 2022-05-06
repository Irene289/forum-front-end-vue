import { apiHelper } from "../utils/helpers"

export default {
  getRestaurant({ restaurantId }) {
    return apiHelper.get(`/restaurants/${restaurantId}`)
  },
  getRestaurants ({ page, categoryId }) {
    // 帶入 queryString
    const searchParams = new URLSearchParams({page, categoryId})
    // 透過apiHelper發出GET請求給/restaurants
    return apiHelper.get(`/restaurants?${searchParams.toString()}`)
  },
  getFeeds() {
    return apiHelper.get('/restaurants/feeds')
  },
  getTopRestaurants () {
    return apiHelper.get('/restaurants/top')
  }
}
