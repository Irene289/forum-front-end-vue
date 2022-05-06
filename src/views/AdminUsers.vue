<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />
    <Spinner v-if="isLoading" />
    <table v-else class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col" width="140">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.email }}</td>
          <!-- 顯示身份 -->
          <td v-if="user.isAdmin">admin</td>
          <td v-else>user</td>
          <td>
            <!-- 切換身份 -->
            <template v-if="currentUser.id !== user.id">
              <button 
                v-if="user.isAdmin"
                type="button" 
                class="btn btn-link"
                @click.stop.prevent="toggleUserRole({userId: user.id, isAdmin: user.isAdmin})"
              >
                set as user
              </button>
              <button 
                v-else
                type="button" 
                class="btn btn-link"
                @click.stop.prevent="toggleUserRole({userId: user.id, isAdmin: user.isAdmin})"
              >
                set as admin
              </button>
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from './../components/AdminNav'
import Spinner from './../components/Spinner'
import adminAPI from './../apis/admin'
import { Toast } from './../utils/helpers'
import { mapState } from 'vuex'

export default {
  name: 'AdminUsers',
  components: {
    AdminNav,
    Spinner
  },
  data () {
    return {
      users: {
        id: -1,
        email: '',
        isAdmin: ''
      },
      isLoading: true
    }
  },
  created () {
    this.fetchUser()
  },
  methods: {
    async fetchUser () {
      try {
        this.isLoading = true
        const response = await adminAPI.users.get()
        const { data } = response

        // console.log(response) // no data.status

        if (response.statusText !== 'OK') {
          throw new Error(response.statusText)
        }

        this.users = data.users
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        console.log('Error', error)
        Toast.fire({
          icon: 'error',
          title: '無法取得使用者資訊，請稍後再試'
        })
      }
    },
    async toggleUserRole ({userId, isAdmin}) {
      try {
        const { data } = await adminAPI.users.update({
          userId,
          isAdmin: (!isAdmin).toString()
        })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.users = this.users.map( user => {
          if ( user.id === userId ) {
            return {
              ...user,
              isAdmin: !isAdmin
            }
          }
          return user
        })
      } catch (error) {
        console.log('Error', error)
        Toast.fire({
          icon: 'error',
          title: '無法更新使用者，請稍後再試'
        })
      }
    }
  },
  computed: {
    ...mapState(['currentUser'])
  }
}
</script>
