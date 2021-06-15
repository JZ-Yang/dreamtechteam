import request from '@/utils/request'

export default {
    //查询简介
    introductionSelectLatest() {
    return request({
      url: '/service_bases/introduction/introductionSelectLatest',
      method: 'get'
    })
  },
   //查询成员风采
   studentSelect(page,limit,isGood) {
    return request({
      url: `/service_bases/student/studentSelect/${page}/${limit}`,
      params: {
        isGood:1
      },
      method: 'get'
    })
  },
 /*  studentSelectByGrade(page,limit,grade,type) {
    return request({
      url: `/service_bases/student/studentSelect/${page}/${limit}`,
      params: {
        conditions:grade,
        type:type,
      },
      method: 'get',
    })
  }, */
  //查询成员详情
  studentSelectDetail(name) {
    return request({
      url: `/service_bases/student/studentSelectDetails`,
      params: {
        id:name
      },
      method: 'get',
    })
  },
  //查询分类查询成员
  studentSelectType(page,limit,type,grade) {
    return request({
      url: `/service_bases/student/studentSelect/${page}/${limit}`,
      params: {
        type:type,
        conditions:grade
      },
      method: 'get',
    })
  },

   //查询研究人员
   teacherSelect(page,limit) {
    return request({
      url: `/service_bases/teacher/teacherSelect/${page}/${limit}`,
      method: 'get'
    })
  },
  //查询研究人员详情
  teacherSelectDetail(name) {
    return request({
      url: `/service_bases/teacher/teacherSelectDetails`,
      params: {
        id:name
      },
      method: 'get',
    })
  },
//按分类查询项目
projectSelect(page,limit,type) {
  return request({
    url: `/service_bases/project/projectSelect/${page}/${limit}`,
    params: {
      type:type
    },
    method: 'get',
  })
},
//查询项目详情
projectSelectDetails(id) {
  return request({
    url: `/service_bases/project/projectSelectDetails`,
    params: {
      id:id
    },
    method: 'get',
  })
},

   //查询轮播图
   swiperSelect(page,limit) {
    return request({
      url: `/service_bases/swiper/swiperSelect/${page}/${limit}`,
      params: {
        flag:1
      },
      method: 'get'
    })
  },
   //查询轮播图
   queryAllGrade(type) {
    return request({
      url: `/service_bases/student/queryAllGrade`,
      params: {
        type:type
      },
      method: 'get'
    })
  },

}