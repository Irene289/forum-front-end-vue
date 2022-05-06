<template>
  <form @submit.stop.prevent="handleSubmit">
    <div class="form-group mb-4">
      <label for="text">留下評論：</label>
      <textarea
        v-model="text"
        class="form-control"
        rows="3"
        name="text"
      />
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <button
        type="button"
        class="btn btn-link"
        @click="$router.back()"
      >回上一頁</button>
      <button
        type="submit"
        class="btn btn-primary mr-0"
      >
        Submit
      </button>
    </div>
  </form>
</template>

<script>
import commentsAPI from './../apis/comments'
import { Toast } from './../utils/helpers'

export default {
  name: 'CreateComment',
  props: {
    restaurantId: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      text: '',
    }
  },
  methods: {
    async handleSubmit() {
      // console.log('handleSubmit', this.text)
      try {
        // 向 API 發送 POST 請求
        const { data } = await commentsAPI.postComment({
          text: this.text,
          restaurantId: this.restaurantId
        })
        
        if (data.status !== 'success') {
          throw new Error(data.message)
        } 

        // 伺服器新增 Comment 成功後...
        this.$emit('after-create-comment', {
          text: this.text,
          restaurantId: this.restaurantId,
        })
        // 將表單內的資料清空
        this.text = ''
      } catch (error) {
        console.log('Error', error)
        Toast.fire({
          icon: 'error',
          title: '無法刪除評論，請稍後再試'
        })
      } 
    }
  }
}
</script>

<style scoped>
.form-group {
  margin: 21px 0 8px;
}
</style>
