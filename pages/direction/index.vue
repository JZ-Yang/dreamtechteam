<template>

  <div id="aCoursesList" class="bg-fa of" style="min-width:1160px">
    <!-- 讲师列表 开始 -->
    <section class="container">
      <header class="comm-title all-teacher-title">
        <h2 class="fl tac">
          <span class="c-333">研究方向</span>
        </h2>
        <section class="c-tab-title">
          <a id="subjectAll"  href="#"  style="margin-top:30px"></a>
          <!-- <c:forEach var="subject" items="${subjectList }">

                            <a id="${subject.subjectId}" title="${subject.subjectName }" href="javascript:void(0)" onclick="submitForm(${subject.subjectId})">${subject.subjectName }</a>

          </c:forEach>-->
        </section>
      </header>

      <section class="c-sort-box unBr">
           <div class="jianjie fsize18 c-666">  <p v-html="this.direction"></p> 
        </div>
    </section>
    </section>
    <!-- /讲师列表 结束 -->
  </div>
</template>
<script>
import direction from '@/api/direction'
export default {

  data () {
    return {
       direction:'',
    }
  },
   created() {
     //查询最新联系方式
    this.directionSelectLatest()
  },
  methods:{
     //查询最新联系方式
    directionSelectLatest() {
      direction.directionSelectLatest()
        .then(response => {
          console.log(response.data.data.Direction.direction)
          this.direction = response.data.data.Direction.direction
        })
    },
  }
};

</script>
<style scoped>
.jianjie{

  padding: 20px 40px;
  line-height: 35px;
  text-indent:2em;
}
</style>