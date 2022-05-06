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
        type="button" 
        class="btn btn-danger"
        :disabled="isProcessing"
        @click.stop.prevent="deleteFollow(user.id)"
      >
        取消追蹤
      </button>
      <button 
        v-else
        type="button" 
        class="btn btn-primary"
        :disabled="isProcessing"
        @click.stop.prevent="addFollow(user.id)"
      >
        追蹤
      </button>
    </template>
  </div>
</template>

<script>
import usersAPI from './../apis/users'
import {Toast} from './../utils/helpers'
import { mapState } from 'vuex'

export default {
  name: 'UserCard',
  props: {
    initialUser: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      user: this.initialUser,
      isProcessing: false
    }
  },
  methods: {
    async addFollow(userId) {
      try {
        this.isProcessing = true
        const { data } = await usersAPI.addFollowing({ userId })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.user = this.user.map( user => {
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
        this.isProcessing = false
      } catch (error) {
        this.isProcessing = false
        console.log('Error', error)
        Toast.fire({
          icon: 'error',
          title: '無法追蹤，請稍後再試'
        })
      }
    },
    async deleteFollow(userId) {
      try {
        this.isProcessing = true
        const { data } = await usersAPI.deleteFollowing({ userId })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.user = this.user.map(user => {
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
        this.isProcessing = false
      } catch (error) {
        this.isProcessing = false
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
