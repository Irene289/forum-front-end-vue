<template>
  <div>
    <h2 class="my-4">所有評論：</h2>

    <div v-for="comment in restaurantComments" :key="comment.id">
      <blockquote class="blockquote mb-0">
        <button 
          v-if="currentUser.isAdmin"
          @click.prevent.stop="handleDeleteButtonClick(comment.id)"
          type="button" 
          class="btn btn-danger float-right"
        >
          Delete
        </button>
        <h3>
          <router-link 
            :to="{ name: 'user', params: {id: comment.User.id }}"
          >
            {{ comment.User.name }}
          </router-link>
        </h3>
        <p>{{ comment.text }}</p>
        <footer class="blockquote-footer">
          {{ comment.createdAt | fromNow}}
        </footer>
      </blockquote>
      <hr />
    </div>
  </div>
</template>

<script>
import {fromNowFilter} from './../utils/mixins'
import commentsAPI from './../apis/comments'
import { Toast } from './../utils/helpers'
import { mapState } from 'vuex'

export default {
  name: "RestaurantComments",
  mixins: [fromNowFilter],
  props: {
    restaurantComments: {
      type: Array,
      required: true,
    },
  },
  methods: {
    async handleDeleteButtonClick(commentId) {
      try {
        // 請求 API 伺服器刪除 id 為 commentId 的評論
        const { data } = await commentsAPI.deleteComment({ commentId })

        if (data.status !== 'success') {
          throw new Error(data.message)
        } 
        
        // 觸發父層事件 - $emit( '事件名稱' , 傳遞的資料 )
        this.$emit('after-delete-comment', commentId)
      } catch (error) {
        console.log('Error', error)
        Toast.fire({
          icon: 'error',
          title: '無法刪除評論，請稍後再試'
        })
      }
    }
  },
  computed: {
    ...mapState(['currentUser'])
  }
};
</script>

<style scoped>
h2.my-4 {
  margin-bottom: 1rem !important;
  font-size: 18px;
}

h3 {
  margin-bottom: 3px;
  line-height: 1.3;
}

.blockquote-footer {
  font-size: 12.5px;
}
</style>
