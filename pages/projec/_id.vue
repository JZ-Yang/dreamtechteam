<template>

  <div id="aCoursesList" class="bg-fa of" style="min-width:1160px">

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

         <!--   
            <h3 class="hLh30">

              <span class="fsize24 c-333">{{mandetail.name}}</span>

            </h3> -->
            
            <section class="t-infor-txt">

              <p class="mt20" v-html="mandetail.text"></p>

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
   
    },
  //params.id获取路径id值
  asyncData({ params, error }) {
    console.log(params.id)
    return index.projectSelectDetails(params.id)
      .then(response => {

        console.log(response.data.data.Project)
        var a=response.data.data.Project;
        return {
          mandetail : a
        }
      })
  }
};

</script>