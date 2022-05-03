<template>
  <div class="col-3">
    <router-link 
      :to="{name: 'user', params: {id: user.id}}"
    >
      <img
        src="https://picsum.photos/id/237/200"
        width="140px"
        height="140px"
      />
    </router-link>
    <h2>{{ user.name }}</h2>
    <span class="badge badge-secondary"
      >追蹤人數：{{ user.FollowerCount }}</span
    >
    <p class="mt-3">
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
    </p>
  </div>
</template>

<script>
import usersAPI from './../apis/users'
import {Toast} from './../utils/helpers'

export default {
  name: 'UserCard',
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      users: ''
    }
  },
  methods: {
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
  }
}
</script>
