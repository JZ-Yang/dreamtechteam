<template>

  <div >

    <!-- 讲师列表 开始 -->

    <section class="container">

      <header class="comm-title all-teacher-title">

        <h2 class="fl tac">

          <span class="c-333">研究团队</span>

        </h2>

        <section class="c-tab-title">

          <a id="subjectAll" title="" href="#" style="margin-top:30px"></a>
        </section>

      </header>

      <section class="c-sort-box unBr">

        <div>
          <article class="i-teacher-list">

            <ul class="of">

              <li v-for="item in teacherList" :key="item.id">

                <section class="i-teach-wrap">

                  <div class="i-teach-pic">

                    <a :href="getHref(item.id)" :title="item.name" target="_blank">

                      <img :alt="item.name" :src="bindImg(item.img)" class="img1">

                    </a>

                  </div>

                  <div class="mt10 hLh30 txtOf tac">

                    <a :href="'/team/'+item.id" :title="item.name" target="_blank" class="fsize18 c-666">{{item.name}}</a>

                  </div>

                  <div class="mt15 i-q-txt i-q-txt1">

                    <p class="fsize14 c-999">{{item.researchDirection}}</p>

                  </div>

                </section>

              </li>
            </ul>

            <div class="clear"></div>

          </article>

        </div>

        <!-- 公共分页 开始 -->

        <div>

          <div class="paging">

          <!-- undisable这个class是否存在，取决于数据属性hasPrevious -->
          <a
            :class="{active : active == 0,undisable: !data.hasPrevious}"
            href="#"
            title="首页"
            @click="selected(0)"
            @click.prevent="gotoPage(1)">首页</a>

          

          <a
            v-for="page in pages"
            :key="page"
            :class="{active : active == page,current: data.current == page, undisable: data.current == page}"
            :title="'第'+page+'页'"
            href="#"
            @click="selected(page)"
            @click.prevent="gotoPage(page)">{{ page }}</a>

         
          <a
            :class="{active : active == 1.1,undisable: !data.hasNext}"
            href="#"
            title="末页"
            @click="selected(1.1)"
            @click.prevent="gotoPage(pages)">末页</a>

          <div class="clear"/>
        </div>
      </div>
      <!-- 公共分页 结束 -->
      </section>
    </section>
    <!-- /讲师列表 结束 -->
  </div>
</template>

<script>
import index from '@/api/index'
import { log } from 'util';
export default {
  mounted() {
   /*  if(sessionStorage.getItem("page")){
       console.log(3333333333)
    } */
  },
  created() {
     console.log(222222222)
    //if(sessionStorage.getItem("page")){
       //console.log(3333333333)
          //  this.gotoPage(sessionStorage.getItem("page"))
       // }else{
            this.gotoPage(this.page)
       // }
  },
   data() {
    return {
      active:'1',
      page:'1',
      pages:'',
      data:[],
    }
    },
  //异步调用，调用一次
  //params: 相当于之前 this.$route.params.id  等价  params.id
 /*  asyncData({ params, error }) {
   
    return index.teacherSelect(1,8).then(response => {
       console.log(11111111111111)
       
          return { teacherList: response.data.data.rows,
          data:response.data.data,
          pages:Math.ceil(response.data.data.total/8) }
       })
  }, */
  methods:{
    getHref(id){
      console.log(this.page)
     // sessionStorage.setItem("page", this.page);
      return '/team/'+id
    }, 
     selected(page){
     this.active = page;
     },
    bindImg(img) {
	    return 'http://39.100.59.197:8080/dre@mtech_image/'+img;
    },

    //分页切换的方法
    //参数是页码数
    gotoPage(page) {
      index.teacherSelect(page,8)
        .then(response => {
          this.page=page
          console.log(this.page)
          this.teacherList = response.data.data.rows
          this.data=response.data.data,
          this.pages=Math.ceil(response.data.data.total/8)
        })
    }
  
  }
}
</script>
<style>
.i-q-txt1 p{
  height: 20px!important;
  line-height: 20px!important;
}
.i-teach-pic .img1{display:block;margin:auto;border-radius:1%;max-width:100%;max-height: 320px;text-align: center;width: 220px;height: 160px;}
.active{
  border-color: #4f89ea!important;
  color:#4f89ea;
}
</style>