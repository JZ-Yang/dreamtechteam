<template>

  <div id="aCoursesList" class="bg-fa of" style="min-width:1160px!important">

    <!-- 讲师介绍 开始 -->

    <section class="container">

      <header class="comm-title">

        <h2 class="fl tac">

          <span class="c-333">{{mandetail.name}}</span>

        </h2>

      </header>

      <div class="t-infor-wrap">

        <!-- 讲师基本信息 -->

        <section class="fl t-infor-box c-desc-content">

          <div class="mt20 ml20" >
<div class="imgs1">
            <section class="t-infor-pic " >

              <img :src="bindImg(mandetail.img)" >

            </section>
 </div>
           
            <div style="display:flex;flex-drection:row">
                <section style="margin-right:10px" class="mt10" v-if="mandetail.isGood===1">
                  <span class="t-tag-bg">优秀学生</span>
                </section>
                <section class="mt10" >
                  <span class="t-tag-bg">{{mandetail.grade}}级</span>
                </section>
            </div>
            <section class="t-infor-txt">

              <p class="mt20 zi" v-html="mandetail.text"></p>

            </section>

            <div class="clear"></div>

          </div>

        </section>

        <div class="clear"></div>

      </div>

     

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
    console.log(params.id)
    return index.studentSelectDetail(params.id)
      .then(response => {

        console.log(response.data.data.Student)
        var a=response.data.data.Student;
        return {
          mandetail : a
        }
      })
  }
};

</script>
<style scoped>
.t-infor-txt{
margin-left: 260px;
}

</style>