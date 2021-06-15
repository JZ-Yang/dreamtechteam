import request from '@/utils/request'

export default {
    //查询最新联系方式
  getContactSelectLatest() {
    return request({
      url: '/service_bases/contact/contactSelectLatest',
      method: 'get'
    })
  }
}