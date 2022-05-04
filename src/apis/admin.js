import { apiHelper } from "../utils/helpers"
const getToken = () => localStorage.getItem('token')

export default {
  categories: {
    get () {
      return apiHelper.get('/admin/categories', {
        // 從 LocalStorage 取出 token，放進 Header
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
    create({ name }) {
      return apiHelper.post('/admin/categories', {name},
      {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
    delete ({ categoryId }) {
      return apiHelper.delete(`/admin/categories/${categoryId}`, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    } 
  },
  restaurants: {
    getDetail ({ restaurantId }) {
      return apiHelper.get(`/admin/restaurants/${restaurantId}`, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
    update ({ restaurantId, formData }) {
      return apiHelper.put(`/admin/restaurants/${restaurantId}`, formData, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
    create ({ formData }) {
      return apiHelper.post('/admin/restaurants', formData, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
    get () {
      return apiHelper.get('/admin/restaurants', {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
    delete ({ restaurantId }) {
      return apiHelper.delete(`/admin/restaurants/${restaurantId}`, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    }
  }
}