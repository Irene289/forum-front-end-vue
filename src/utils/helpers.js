import axios from 'axios'
import Swal from 'sweetalert2'

const baseURL = 'http://localhost:3000/api'
const axiosInstance = axios.create({
  baseURL
})

// Add a request interceptor
axiosInstance.interceptors.request.use(function (config) {
  // Do something before request is sent
  // 從 localStorage 將 token 取出
  const token = localStorage.getItem('token')

  // 如果 token 存在的話，則帶入到 headers 當中
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`
  }

  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
})

export const apiHelper = axiosInstance

export const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
})