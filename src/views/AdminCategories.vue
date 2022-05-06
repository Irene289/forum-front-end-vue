<template>
  <div class="container py-5">
     <!-- 1. 使用先前寫好的 AdminNav -->
    <AdminNav />

    <form class="my-4">
      <div class="form-row">
        <div class="col-auto">
          <input
            v-model="newCategoryName"
            type="text"
            class="form-control"
            placeholder="新增餐廳類別..."
          >
        </div>
        <div class="col-auto">
          <button
            :disabled="isProcessing"
            @click.stop.prevent="createCategory"
            type="button"
            class="btn btn-primary"
          >
            新增
          </button>
        </div>
      </div>
    </form>
    <Spinner v-if="isLoading" />
    <table v-else class="table">
      <thead class="thead-dark">
        <tr>
          <th
            scope="col"
            width="60"
          >
            #
          </th>
          <th scope="col">
            Category Name
          </th>
          <th
            scope="col"
            width="210"
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="category in categories"
          :key="category.id"
        >
          <th scope="row">
            {{ category.id }}
          </th>
          <td class="position-relative">
            <div 
              v-show="!category.isEditing"
              class="category-name"
            >
              {{ category.name }}
            </div>
            <input 
              v-show="category.isEditing"
              v-model="category.name"
              type="text"
              class="form-control"
            >
            <span
              v-show="category.isEditing"
              class="cancel"
              @click.stop.prevent="handleCancel(category.id)"
            >
              ✕
            </span>
          </td>
          <td class="d-flex justify-content-between">
            <button
              v-show="!category.isEditing"
              type="button"
              class="btn btn-link mr-2"
              @click.stop.prevent="toggleIsEditing(category.id)"
            >
              Edit
            </button>
            <button
              v-show="category.isEditing"
              type="button"
              class="btn btn-link mr-2"
              @click.stop.prevent="updateCategory({ categoryId: category.id, name: category.name })"
            >
              Save
            </button>
            <button
              @click.stop.prevent="deleteCategory(category.id)"
              type="button"
              class="btn btn-link mr-2"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.category-name {
  padding: 0.375rem 0.75rem;
  border: 1px solid transparent;
  outline: 0;
  cursor: auto;
}

.btn-link {
  width: 62px;
}

.cancel {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border: 1px solid #aaaaaa;
  border-radius: 50%;
  user-select: none;
  cursor: pointer;
  font-size: 12px;
}
</style>

<script>
import AdminNav from './../components/AdminNav'
import Spinner from './../components/Spinner'
import adminAPI from './../apis/admin'
import { Toast } from './../utils/helpers'

export default {
  name: 'AdminCategories',
  components: {
    AdminNav,
    Spinner
  },
  // 3. 定義 Vue 中使用的 data 資料
  data () {
    return {
      categories: [],
      newCategoryName: '',
      isProcessing: false,
      isLoading: true
    }
  },
  // 5. 調用 `fetchCategories` 方法
  created () {
    this.fetchCategories()
  },
  methods: {
    // 4. 定義 `fetchCategories` 方法，串 API 資料帶入 Vue 物件
    async fetchCategories () {
      try {
        this.isLoading = true
        const response = await adminAPI.categories.get()
        const { data } = response

        // console.log(response)
        // console.log(data)

        if (response.statusText !== 'OK') {
          throw new Error(response.statusText)
        } 

        this.categories = data.categories.map( category => ({
          ...category,
          isEditing: false,
          nameCached: ''
        }))
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        console.log('Error', error)
        Toast.fire({
          icon: 'error',
          title: '無法取得類別，請稍後再試'
        })
      }
    },
    async createCategory () {
      // 透過 API 告知伺服器欲新增的餐廳類別
      try {
        this.isProcessing = true

        if ( !this.newCategoryName) {
          Toast.fire({
            icon: 'warning',
            title: '請輸入類別'
          })
          this.isProcessing = false
          return
        } 

        const { data } = await adminAPI.categories.create({ 
          name: this.newCategoryName 
        })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        // 將新的類別添加到陣列中
        this.categories.push({
          id: data.categoryId,
          name: this.newCategoryName, 
          isEditing: false,
        }) 

        this.isProcessing = false
        this.newCategoryName = ''
      } catch (error) {
        this.isProcessing = false
        console.log('Error', error)
        Toast.fire({
          icon: 'error',
          title: '無法新增類別，請稍後再試'
        })
      }
    },
    async deleteCategory (categoryId) {
      // 透過 API 告知伺服器欲刪除的餐廳類別
      try {
        const { data } = await adminAPI.categories.delete({ categoryId })

        if (data.status !== 'success') {
          throw new Error(data.message)
        } 

        this.categories = this.categories.filter( category => category.id !== categoryId )
      } catch (error) {
        console.log('Error', error)
        Toast.fire({
          icon: 'error',
          title: '無法刪除類別，請稍後再試'
        })
      }
    },
    toggleIsEditing (categoryId) {
      this.categories = this.categories.map( category => {
      if ( category.id === categoryId ) {
        return {
            ...category,
            nameCached: category.name, // 將現有資料帶入nameCached中
            isEditing: !category.isEditing 
        }
      }
        return category
      })
    },
    async updateCategory ({ categoryId, name }) {
      try {
        const { data } = await adminAPI.categories.update({ 
          categoryId,
          name
        })
        console.log(data)

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.toggleIsEditing(categoryId)
      } catch (error) {
        console.log('Error', error)
        Toast.fire({
          icon: 'error',
          title: '無法刪除類別，請稍後再試'
        })
      }
    },
    handleCancel (categoryId) {
      this.categories = this.categories.map( category => {
        if ( category.id === categoryId ) {
          return {
            ...category,
            // 把原本的餐廳類別名稱還回去
            name: category.nameCached
          }
        }
        return category
      })
      this.toggleIsEditing(categoryId)
    }
  }
}
</script>