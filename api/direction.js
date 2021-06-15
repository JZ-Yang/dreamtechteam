import request from '@/utils/request'

export default {
    //查询方向
    directionSelectLatest() {
    return request({
      url: '/service_bases/direction/directionSelectLatest',
      method: 'get'
    })
  }
}