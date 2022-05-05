<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          v-model="user.name"
          id="name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
          v-if="user.image"
          :src="user.image"
          class="d-block img-thumbnail mb-3"
          width="200"
          height="200"
        >
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
          @change="handleFileChange"
        />
      </div>

      <button 
        :disabled="isProcessing"
        type="submit" 
        class="btn btn-primary"
      >
        {{ isProcessing ? "處理中..." : "Submit" }}
      </button>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'

export default {
  name: 'UserEdit',
  data() {
    return {
      user: {
        id: -1,
        name: '',
        image: ''
      },
      isProcessing: false
    }
  },
  watch: {
    currentUser (user) {
      if (user.id !== this.currentUser.id) return

      const { id } = this.$route.params
      this.setUser(id)
    }
  },
  created() {
    if (this.currentUser.id === -1) return
    const { id } = this.$route.params
    this.setUser(id)
  },
  beforeRouteUpdate(to, from, next) {
    if (this.currentUser.id === -1) return
    // console.log({to, from})
    const { id } = to.params
    this.setUser(id)
    next()
  },
  methods: {
    setUser (userId) {
      const { id, name, image } = this.currentUser

      this.user = {
        id,
        name,
        image
      }

      // console.log(typeof id) // number
      // console.log(typeof userId) // string

      if (userId.toString() !== id.toString()) {
        this.$router.push({ name: 'not-fount' })
        return
      }
    },
    handleFileChange (e) {
      const { files } = e.target
      // console.log(files)
      if ( files.length === 0 ) {
        this.user.image = ''
      } else {
        const imgURL = window.URL.createObjectURL(files[0])
        this.user.image = imgURL
      }
    },
    async handleSubmit (e) {
      try {
        this.isProcessing = true

        // 漏填姓名則發出 Toast 提示
        if (!this.user.name) {
          Toast.fire({
            icon: 'warning',
            title: '請輸入姓名'
          })
          return
        }

        const form = e.target
        const formData = new FormData(form)
        // console.log(formData)

        // for (let [name, value] of formData) {
        //   console.log(name + ': ' + value)
        // }

        const { data } = await usersAPI.update({ 
          userId: this.user.id,
          formData
        })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.$router.push({ name: 'user' })

      } catch (error) {
        this.isProcessing = false

        console.log('Error', error)
        Toast.fire({
          icon: 'error',
          title: '無法編輯，請稍後再試'
        })
      } 
    }
  },
  computed: {
    ...mapState(['currentUser'])
  }
}
</script>
