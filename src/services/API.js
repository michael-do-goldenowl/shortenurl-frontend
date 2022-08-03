import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SHORTEN_DOMAIN,
})

axiosInstance.interceptors.request.use(
  async (config) => {
    return config
  },
  (error) => Promise.reject(error)
)

export default axiosInstance
