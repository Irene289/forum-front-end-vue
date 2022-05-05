import { apiHelper } from "../utils/helpers"
const getToken = () => localStorage.getItem('token')

export default {
  postComment({ text, restaurantId }) {
    return apiHelper.post('/comments', { 
      text,
      restaurantId
    }, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  deleteComment({ commentId }) {
    return apiHelper.delete(`/comments/${commentId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}