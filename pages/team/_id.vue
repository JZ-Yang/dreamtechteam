<template>

  <div id="aCoursesList" class="bg-fa of" style="min-width:1160px">

    <!-- 讲师介绍 开始 -->

    <section class="container">

      <header class="comm-title">

        <h2 class="fl tac">

          <span class="c-333">{{teacherdetail.name}}</span>

        </h2>

      </header>

      <div class="t-infor-wrap1">

        <!-- 讲师基本信息 -->

        <section class="fl t-infor-box c-desc-content">
          <div class="mt20 ml20">
            <section class="t-infor-pic">
              <img :src="bindImg(teacherdetail.img)">
            </section>
             <div style="display:flex;flex-direction: column;">
                <section style="margin-right:10px" class="mt10" >
                  <span class="t-tag-bg">{{teacherdetail.researchDirection}}</span>
                </section>
                <section class="mt10" >
                  <span class="t-tag-bg">{{teacherdetail.title}}</span>
                </section>
            </div>
            <section class="t-infor-txt t-infor-txt1">
              <p class="mt20">{{teacherdetail.introduce}}</p>
            </section>

            <div class="clear"></div>

          </div>

        </section>

        <div class="clear"></div>

      </div>

      <section class="mt30">

        <div>

          <header class="comm-title all-teacher-title c-course-content">

            <h2 class="fl tac">

              <span class="c-333">科研情况</span>

            </h2>

            <section class="c-tab-title">

              <a href="javascript: void(0)">&nbsp;</a>

            </section>
            <section class="t-infor-txt">
                <p class="mt20" v-html="teacherdetail.text"></p>
              </section>
            </header>

        

        

        </div>

      </section>

    </section>

    <!-- /讲师介绍 结束 -->

  </div>

</template>

<script>
import index from '@/api/index'
export default {
   data () {
    return {
      
    }
   },
    methods:{
    bindImg(img) {
	    return 'http://39.100.59.197:8080/dre@mtech_image/'+img;
    },
    },
  //params.id获取路径id值
  asyncData({ params, error }) {
    console.log(params)
    return index.teacherSelectDetail(params.id)
      .then(response => {
        console.log(response.data.data.Teacher)
        var a=response.data.data.Teacher;
        return {
          teacherdetail : a
        }
      })
  }
};


</script>
<style scoped>
.t-infor-wrap1{border-bottom:none;border-top:1px solid #e2e2e2;padding-top:10px;margin-top:-10px;}
.t-infor-txt1{
margin-left: 260px;
}
</style>