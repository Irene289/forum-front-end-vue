<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />

    <table class="table">
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
          <td v-if="user.newAdmin || user.isAdmin">admin</td>
          <td v-else>user</td>
          <td>
            <span v-if="user.isAdmin"></span>
            <button 
              v-else-if="user.newAdmin"
              type="button" 
              class="btn btn-link"
              @click.stop.prevent="toggleUserRole(user.id)"
            >
              set as user
            </button>
            <button 
              v-else-if="!user.newAdmin"
              type="button" 
              class="btn btn-link"
              @click.stop.prevent="toggleUserRole(user.id)"
            >
              set as admin
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from "./../components/AdminNav";

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
    },
  ],
};

export default {
  name: 'AdminUsers',
  components: {
    AdminNav,
  },
  data () {
    return {
      users: {
        id: -1,
        email: '',
        isAdmin: ''
      }
    }
  },
  created () {
    this.fetchUser()
  },
  methods: {
    fetchUser () {
      this.users = dummyData.users.map( user => ({ 
        ...user,
        newAdmin: false
      }))
    },
    toggleUserRole (userId) {
      this.users = this.users.map( user => {
        if ( user.id === userId ) {
          return {
            ...user,
            newAdmin: !user.newAdmin,
          }
        }
        return user
      })
    },
  }
};
</script>
