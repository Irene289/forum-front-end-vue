import { apiHelper } from "../utils/helpers"
const getToken = () => localStorage.getItem('token')

export default {
  getRestaurant({ restaurantId }) {
    return apiHelper.get(`/restaurants/${restaurantId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getRestaurants ({ page, categoryId }) {
    // 帶入 queryString
    const searchParams = new URLSearchParams({page, categoryId})
    // 透過apiHelper發出GET請求給/restaurants
    return apiHelper.get(`/restaurants?${searchParams.toString()}`, {
      // 從 LocalStorage 取出 token，放進 Header
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getFeeds() {
    return apiHelper.get('/restaurants/feeds', {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getTopRestaurants () {
    return apiHelper.get('/restaurants/top', {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  // 改用 getRestaurant
  // getDashboard({ restaurantId }) {
  //   return apiHelper.get(`/restaurants/${restaurantId}/dashboard`, {
  //     headers: { Authorization: `Bearer ${getToken()}` }
  //   })
  // }
}
