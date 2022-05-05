<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img
          :src="profile.image | emptyImageFilter"
          width="300px"
          height="300px"
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{profile.name}}</h5>
          <p class="card-text">{{profile.email}}</p>
          <ul class="list-unstyled list-inline">
            <li><strong>{{profile.commentsLength}}</strong> 已評論餐廳</li>
            <li><strong>{{profile.favoritedRestaurantsLength}}</strong> 收藏的餐廳</li>
            <li><strong>{{profile.followingsLength}}</strong> followings (追蹤者)</li>
            <li><strong>{{profile.followersLength}}</strong> followers (追隨者)</li>
          </ul>
          <template v-if="profile.isAdmin">
            <router-link 
              :to="{ name: 'user-edit', params: { id: profile.id }}"
              class="btn btn-primary"
            >
                Edit
            </router-link>
          </template>
          <template v-else>
            <button
              v-if="isFollowed"
              type="button"
              class="btn btn-danger"
              @click.stop.prevent="deleteFollowing(profile.id)"
            >
              取消追蹤
            </button>
            <button
              v-else
              type="button"
              class="btn btn-primary"
              @click.stop.prevent="addFollowing(profile.id)"
            >
              追蹤
            </button>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from './../utils/mixins'
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'

export default {
  name: 'UserProfileCard',
  mixins: [emptyImageFilter],
  props: {
    profile: {
      type: Object,
      required: true
    },
    initialIsFollowed: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      isFollowed: this.initialIsFollowed
    }
  },
  watch: {
    initialIsFollowed (isFollowed) {
      this.isFollowed = isFollowed
    }
  },
  methods: {
    async deleteFollowing (userId) {
      try {
        const { data } = await usersAPI.deleteFollowing({userId})

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.isFollowed = false

      } catch (error) {
        console.log('Error', error)
        Toast.fire({
          icon: 'error',
          title: '無法取消追蹤，請稍後再試'
        })
      }
    },
    async addFollowing (userId) {
      try {
        const { data } = await usersAPI.addFollowing({userId})

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        this.isFollowed = true

      } catch (error) {
        console.log('Error', error)
        Toast.fire({
          icon: 'error',
          title: '無法追蹤，請稍後再試'
        })
      }
    },
  }
}
</script>
