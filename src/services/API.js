import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001',
})

axiosInstance.interceptors.request.use(
  async (config) => {
    return config
  },
  (error) => Promise.reject(error)
)

export default axiosInstance
