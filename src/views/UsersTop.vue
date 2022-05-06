<template>
  <div class="container py-5">
    <NavTabs />
    <Spinner v-if="isLoading" />
    <template v-else>
      <h1 class="mt-5">美食達人</h1>
      <hr />
      <div class="row text-center">
        <div 
          class="col-3" 
          v-for="user in users" 
          :key="user.id"
        >
          <router-link :to="{name: 'user', params: {id: user.id}}">
            <img
              :src="user.image | emptyImageFilter"
              width="140px"
              height="140px"
            />
          </router-link>
          <h2>{{ user.name }}</h2>
          <span class="badge badge-secondary"
            >追蹤人數：{{ user.followerCount }}</span
          >
          <br>
          <template v-if="currentUser.id === user.id">
            <router-link 
              :to="{ name: 'user-edit', params: { id: currentUser.id }}"
              class="btn btn-primary"
            >
                Edit
            </router-link>
          </template>
          <template v-else 
            class="mt-3">
            <button 
              v-if="user.isFollowed"
              @click.stop.prevent="deleteFollow(user.id)"
              type="button" 
              class="btn btn-danger"
            >
              取消追蹤
            </button>
            <button 
              v-else
              @click.stop.prevent="addFollow(user.id)"
              type="button" 
              class="btn btn-primary"
            >
              追蹤
            </button>
          </template>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { emptyImageFilter } from './../utils/mixins'
import NavTabs from './../components/NavTabs'
import Spinner from './../components/Spinner'
import usersAPI from './../apis/users'
import {Toast} from './../utils/helpers'
import { mapState } from 'vuex'

export default {
  name: "UsersTop",
  mixins: [emptyImageFilter],
  components: {
    NavTabs,
    Spinner
  },
  data() {
    return {
      users: [],
      isLoading: true
    }
  },
  created() {
    this.fetchUsers()
  },
  methods: {
    async fetchUsers() {
      try {
        this.isLoading = true
        const { data } = await usersAPI.getTopUsers()

        this.users = data.users.map(user => ({
          id: user.id,
          name: user.name,
          image: user.image,
          followerCount: user.FollowerCount,
          isFollowed: user.isFollowed
        }))
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        console.log('Error', error)
        Toast.fire({
          icon: 'error',
          title: '無法取得使用者資料，請稍後再試'
        })
      }
    },
    async addFollow(userId) {
      try {
        const { data } = await usersAPI.addFollowing({ userId })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.users = this.users.map( user => {
          if (user.id !== userId) {
            return user
          } else {
            return {
              ...user,
              followerCount: user.followerCount + 1,
              isFollowed: true,
            }
          }
        })
      } catch (error) {
        console.log('Error', error)
        Toast.fire({
          icon: 'error',
          title: '無法追蹤，請稍後再試'
        })
      }
    },
    async deleteFollow(userId) {
      try {
        const { data } = await usersAPI.deleteFollowing({ userId })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.users = this.users.map(user => {
          if (user.id !== userId) {
            return user
          } else {
            return {
              ...user,
              followerCount: user.followerCount - 1,
              isFollowed: false,
            }
          }
        })
      } catch (error) {
        console.log('Error', error)
        Toast.fire({
          icon: 'error',
          title: '無法取消追蹤，請稍後再試'
        })
      }
    }
  },
  computed: {
    ...mapState(['currentUser'])
  }
}
</script>