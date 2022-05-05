<template>
  <div class="album py-5 bg-light">
    <div class="container">
      <!-- UserProfileCard -->
      <UserProfileCard 
        :profile="profile"
        :initial-is-followed="isFollowed"
      />
      <div class="row">
        <div class="col-md-4">
          <!-- UserFollowingsCard -->
          <UserFollowingsCard 
            :followings="followings"
          />
          <br />
          <!-- UserFollowersCard -->
          <UserFollowersCard 
            :followers="followers"
          />
        </div>
        <div class="col-md-8">
          <!-- UserCommentsCard -->
          <UserCommentsCard 
            :comments="comments"
          />
          <br />
          <!-- UserFavoritedRestaurantsCard -->
          <UserFavoritedRestaurantsCard 
            :favorited-restaurants="favoritedRestaurants"
          />
        </div>
      </div>
      <hr>
      <button
        type="button"
        class="btn btn-link"
        @click="$router.back()"
      >
        回上一頁
      </button>
    </div>
  </div>
</template>>

<script>
import UserProfileCard from "./../components/UserProfileCard"
import UserFollowingsCard from "./../components/UserFollowingsCard"
import UserFollowersCard from "./../components/UserFollowersCard"
import UserCommentsCard from "./../components/UserCommentsCard"
import UserFavoritedRestaurantsCard from "./../components/UserFavoritedRestaurantsCard"
import usersAPI from './../apis/users'
import { Toast } from './../utils/helpers'
import { mapState } from 'vuex'

export default {
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard,
  },
  data () {
    return {
      profile: {
        id: -1,
        name: '',
        email: '',
        isAdmin: -1,
        image: '',
        commentsLength: 0,
        favoritedRestaurantsLength: 0,
        followersLength: 0,
        followingsLength: 0 
      },
      comments: [],
      favoritedRestaurants: [],
      followers: [],
      followings: [],
      isFollowed: ''
    }
  },
  created () {
    const { id: userId } = this.$route.params
    this.fetchUser(userId)
  },
  beforeRouteUpdate (to, from, next) {
    // console.log({to})
    const { id } = to.params
    this.fetchUser(id)
    next()
  },
  methods: {
    async fetchUser (userId) {
      try {
        const { data } = await usersAPI.get({userId})

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        const { profile, isFollowed } = data

        const {
          id,
          name,
          email,
          isAdmin,
          image,
          Comments,
          FavoritedRestaurants,
          Followers,
          Followings
        } = profile

        this.profile = {
          ...this.profile,
          id,
          name,
          email,
          image,
          isAdmin,
          commentsLength: Comments.length,
          favoritedRestaurantsLength: FavoritedRestaurants.length,
          followersLength: Followers.length,
          followingsLength: Followings.length
        }

        this.comments = Comments.filter( comment => comment.text && comment.Restaurant.name )
        this.favoritedRestaurants = FavoritedRestaurants
        this.followers = Followers
        this.followings = Followings
        this.isFollowed = isFollowed

      } catch (error) {
        console.log('Error', error)
        Toast.fire({
          icon: 'error',
          title: '無法取得使用者資訊，請稍後再試'
        })
      }
    }
  },
  computed: {
    ...mapState(['currentUser'])
  }
};
</script>
