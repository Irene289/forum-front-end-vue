<template>
  <div class="container py-5">
    <form class="w-100" @submit.prevent.stop="handleSubmit">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Sign In</h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="email">email</label>
        <input id="email" v-model="email" name="email" type="email"
        class="form-control" placeholder="email" autocomplete="username"
        required autofocus >
      </div>

      <div class="form-label-group mb-3">
        <label for="password">Password</label>
        <input id="password" v-model="password" name="password" type="password"
        class="form-control" placeholder="Password"
        autocomplete="current-password" required >
      </div>

      <button class="btn btn-lg btn-primary btn-block mb-3" type="submit" :disabled="isProcessing">
        Submit
      </button>

      <div class="text-center mb-3">
        <p>
          <!-- <a href="/signup">Sign Up</a> -->
          <!-- 改用以下 -->
          <router-link to="/signup">
            Sign Up
          </router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">&copy; 2017-2018</p>
    </form>
  </div>
</template>

<script>
import authorizationAPI from './../apis/authorization'
import {Toast} from './../utils/helpers'

export default {
  data () {
    return {
      email: '',
      password: '',
      isProcessing: false
    }
  },
  methods: {
    handleSubmit() {
      // const data = JSON.stringify({
      //   email: this.email,
      //   password: this.password
      // })
      // console.log('data', data)

      this.isProcessing = true

      // 用 SweetAlert2 處理漏填：給使用者的提示
      // 如果 email 或 password 為空，則使用 Toast 提示
      // 然後 return 不繼續往後執行
      if ( !this.email || !this.password ) {
        Toast.fire({
          icon: 'warning',
          title: '請輸入 email & password!'
        })
        return
      } 

      authorizationAPI
        .signIn({
          email: this.email,
          password: this.password
        })
        .then(response => {
          // console.log('response', response)

          // 取得 API 請求後的資料，需解構賦值
          const { data } = response

          // 在程式碼中多加一個判斷，透過 throw 拋出錯誤
          // 都沒填，HTTP status: 200
          if ( data.status !== 'success' ) {
            throw new Error(data.message)
          }

          // 將 token 存放在 localStorage 內
          localStorage.setItem('token', data.token)

          // 成功登入後轉址到餐廳首頁
          this.$router.push('/restaurants')
        })
        .catch(error => {
          // 填錯，HTTP status: 不是介於 200~299

          // 按鈕可以重複送出
          this.isProcessing = false

          // 將密碼欄位清空
          this.password = ''

          // 給使用者的提示
          Toast.fire({
            icon: 'warning',
            title: '請確認您輸入了正確的帳號密碼'
          })
          console.log('Error', error)
        })
    }
  },
}
</script>
