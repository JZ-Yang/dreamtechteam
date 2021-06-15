import axios from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL: 'http://39.100.59.197:8080', // api的base_url
  timeout: 20000 // 请求超时时间
})

export default service