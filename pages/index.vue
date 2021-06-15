<template>
  <div>
    <!-- 幻灯片 开始 -->

<div v-swiper:mySwiper="swiperOption"  v-if="swiperSelect1.length>0" style="min-width:1160px">
    <div class="swiper-wrapper" >
        <div class="swiper-slide" style="background: #040B1B;" v-for="item in swiperSelect1" :key="item.id">
           <a target="_blank" :href="bindImg(item.url)">
                  <img :src="bindImg(item.url)" :alt="item.name">
              </a>
        </div>
    </div>
    <div class="swiper-pagination swiper-pagination-red" style="margin:auto;margin-top:-50px"></div>
 
</div>

<!-- 幻灯片 结束 -->
 <!-- 简介 开始 -->
<div class="setbg" style="min-width:1160px">
  <header class="comm-title">
            <h2 class="tac">
              <span class="c-333">实验室简介</span>
            </h2>
          </header>
          <div id="box" class="jianjie fsize18 c-666"> <p v-html="this.introduce"></p></div>       
</div>
 <!-- 简介 结束 -->
       <div id="aCoursesList">
      <!-- 成员风采 开始 -->
      <div class="setbg1" style="min-width:1160px">
        <section class="container">
          <header class="comm-title">
            <h2 class="tac">
              <span class="c-333">成员风采</span>
            </h2>
          </header>
          <div>
            <article class="i-teacher-list">
              <ul class="of box">
                <div v-swiper:mySwiper2="swiperOption2" v-if="initStudent.length>0" class="swiper1">
    <div class="swiper-wrapper">
                <li class="swiper-slide"  v-for="item in initStudent" :key="item.id">
          
                  <section class="i-teach-wrap">
                    <div class="i-teach-pic">
                      <a :href="'/man/'+item.id" :title="item.name">
                        <img class="img" :alt="item.name" :src="bindImg(item.img)">
                      </a>
                    </div>
                    <div class="mt10 hLh30 txtOf tac">
                      <a :href="'/man/'+item.id" :title="item.name" class="fsize18 c-666">{{item.name}}</a>
                    </div>              
                    <div class="mt15 i-q-txt">
                      <p class="fsize14 c-999" v-html="item.text"></p>
                      
                    </div>
                  </section>
                    
                </li>
                </div>

                </div>
                
              </ul>
              <div class="clear"></div>
            </article>
           
          </div>
        </section>
      </div>

      <!-- 成员风采 结束 -->
     <!--  研究人员开始 -->
 <div style="margin-top:0px">
        <section class="container container1">
          <header class="comm-title">
            <h2 class="tac">
              <span class="c-333">指导教师</span>
            </h2>
          </header>
          <div>
            <article class=" i-teacher-list">
              <ul class="of">
                <li  v-for="item in initTeacher" :key="item.id">
                  <section class="i-teach-wrap">
                    <div class="i-teach-pic i-teach-pic1">
                      <a :href="'/team/'+item.id" :title="item.name">
                        <img class="img1" :alt="item.name" :src="bindImg(item.img)">
                      </a>
                    </div>
                    <div class="mt10 hLh30 txtOf tac">
                      <a :href="'/team/'+item.id" :title="item.name" class="fsize18 c-666">{{item.name}}</a>
                    </div>
                    <div class="mt15 i-q-txt i-q-txt1">
                      <p class="fsize14 c-999">{{item.researchDirection}}</p>
                    </div>          
                  </section>
                </li>
              </ul>
              <div class="clear"></div>
            </article>
           <!--  <section class="tac pt20">
              <a href="/team" title="全部成员风采" class="comm-btn c-btn-2">更多</a>
            </section>-->
          </div>
        </section>
      </div>
<!-- 研究人员结束 -->

    </div>

  </div>

</template>
<script>
import index from '@/api/index'
export default {

  data () {
    return {
      introduce:'',
      initStudent:{},
      initTeacher:{},
      swiperSelect1:{},
      swiperOption2: {
          slidesPerView: 4,
          spaceBetween: 40,
          slidesPerGroup: 4,
          autoHeight: true,
          loop: true,
          autoplay:true,
          loopFillGroupWithBlank: true,
           navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }, 
          autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        },
      swiperOption: {
        //配置分页
        pagination: {
          el: '.swiper-pagination'//分页的dom节点
        },
        autoHeight: true,
        autoplay:true,
        loop:true,
        //配置导航
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
      }
    }
  },
  created() {
     //查询最新联系方式
    this.introductionSelectLatest()
    this.initStudentFirst()
    this.initTeacherFirst()
    this.swiperSelect()
  },
  methods:{
    bindImg(img) {
	    return 'http://39.100.59.197:8080/dre@mtech_image/'+img;
    },
    //查询轮播图
    swiperSelect() {
      index.swiperSelect(1,20)
        .then(response => {
          this.swiperSelect1 = response.data.data.rows
        })
    },
     //查询最新联系方式
    introductionSelectLatest() {
      index.introductionSelectLatest()
        .then(response => {
          this.introduce = response.data.data.Introduction.introduction
        })
    },
    //1 查询成员第一页数据
    initStudentFirst() {
      index.studentSelect(1,8,1).then(response => {
        this.initStudent = response.data.data.rows

      })
    },
    //1 查询教师第一页数据
    initTeacherFirst() {
      index.teacherSelect(1,100).then(response => {
        this.initTeacher = response.data.data.rows
      })
    },
  }
}

</script>
<style>
.i-q-txt1 p{
  height: 20px!important;
  line-height: 20px!important;
}
.i-teacher-list1 ul li{width: 20% !important;;float:left;}
.i-teacher-list1 ul{
  padding-left: 20px;padding-right: 10px;
}
.container1{
  width: 1160px!important;
}
.swiper1{
  height: 400px!important;
}
.jianjie{
  padding: 0 40px;
  padding-bottom: 35px;
  line-height: 33px;
  text-indent:2em;
}
.i-teach-pic .img1{display:block;border-radius:1%;max-width:100%;margin:auto;max-height: 320px;text-align: center;width: 220px;height: 155px;}
.setbg{
background: url(../assets/photo/banner/tpxw_bg.jpg);
background-size: cover;
background-repeat: no-repeat;
height: 100%;
}
.setbg1{
background: url(../assets/img/alpha.png) no-repeat ;
background-repeat: no-repeat;
width: 100%;
height: 100%;

}
.node{
   display: flex;
  justify-content: space-between;
}
.swiper-button-next{
  margin-right:-50px
}
.swiper-button-prev{
  margin-left:50px
}
</style>