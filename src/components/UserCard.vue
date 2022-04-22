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
        @click.stop.prevent="deleteFollow"
        type="button" 
        class="btn btn-danger"
      >
        取消追蹤
      </button>
      <button 
        v-else
        @click.stop.prevent="addFollow"
        type="button" 
        class="btn btn-primary"
      >
        追蹤
      </button>
    </p>
  </div>
</template>

<script>
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
      user: this.initialUser
    }
  },
  methods: {
    addFollow() {
      this.user = {
        ...this.user,
        isFollowed: true,
      }
    },
    deleteFollow() {
      this.user = {
        ...this.user,
        isFollowed: false,
      }
    }
  }
}
</script>
