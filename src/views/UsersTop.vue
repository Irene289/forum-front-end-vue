<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>
    <hr />
    <div class="row text-center">
      <UserCard 
        v-for="user in users"
        :key="user.id"
        :initial-user="user" 
      />
      <!-- <div 
        class="col-3" 
        v-for="user in users" 
        :key="user.id"
      >
        <a href="#">
          <img
            src="https://picsum.photos/id/237/200"
            width="140px"
            height="140px"
          />
        </a>
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
      </div> -->
    </div>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import UserCard from './../components/UserCard'

const dummyData = {
  users: [
    {
      id: 1,
      name: "root",
      email: "root@example.com",
      password: "$2a$10$/pJLK/1.61hJO9f7H3HKQOqSU5ERyiLzimg/e1WfnlPdoIqLv89ta",
      isAdmin: true,
      image: null,
      createdAt: "2022-04-18T08:11:33.000Z",
      updatedAt: "2022-04-18T08:11:33.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 2,
      name: "user1",
      email: "user1@example.com",
      password: "$2a$10$.daIm2U.cnzxk180nYmyOuVqCh9cOVFp5QDyMWnWkb6OlyHlDzuCu",
      isAdmin: false,
      image: null,
      createdAt: "2022-04-18T08:11:33.000Z",
      updatedAt: "2022-04-18T08:11:33.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 3,
      name: "user2",
      email: "user2@example.com",
      password: "$2a$10$ztyApNPvWeiSXqh/lATloetDBDyvSxd5W8CiYnykvd2K8KuN7gMAK",
      isAdmin: false,
      image: null,
      createdAt: "2022-04-18T08:11:33.000Z",
      updatedAt: "2022-04-18T08:11:33.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
  ],
};

export default {
  name: "UsersTop",
  components: {
    NavTabs,
    UserCard,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.fetchUsers()
  },
  methods: {
    fetchUsers() {
      this.users = dummyData.users;
    },
  },
};
</script>