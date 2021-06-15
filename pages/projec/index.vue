<template>

  <div id="aCoursesList" class="bg-fa of" style="min-width:1160px">

    <!-- /课程列表 开始 -->

    <section class="container">

      <header class="comm-title">

        <h2 class="fl tac">

          <span class="c-333">项目成果</span>

        </h2>

      </header>

      <section class="c-sort-box">

       
        <div class="js-wrap">

          <section class="fr">

            <span class="c-ccc">

              

            </span>

          </section>

          <section class="fl">

            <ol class="js-tap clearfix">
              <li :class="{'current bg-orange':type00!=''}">

                <a title="全部"  href="javascript:void(0);" @click="searchType00()">全部</a>

              </li>
              <li :class="{'current bg-orange':type0!=''}">

                <a title="科技类项目" href="javascript:void(0);" @click="searchType0()">科技类项目</a>

              </li>

              <li :class="{'current bg-orange':type1!=''}">

                <a title="开发类项目" href="javascript:void(0);" @click="searchType1()">开发类项目
                </a>

              </li>

            </ol>

          </section>

        </div>


  <div class="t-infor-wrap">

        <!-- 讲师基本信息 -->

        <section class="fl t-infor-box c-desc-content" >

          <div class="mt20 ml20 beijing" v-for="item in projectList" :key="item.id">
             <a :href="'/projec/'+item.id" style="text-decoration:none;" target='_blank'>
            <h3 class="hLh30">
              <span class="fsize24 c-333">{{item.name}}</span>
            </h3>
            <section class="t-infor-txt">
               <p v-html="item.briefly"></p> 
            </section>
             </a>
            <div class="clear"></div>
          </div>
        </section>
        <div class="clear"></div>
      </div>
        <!-- 公共分页 开始 -->
        <div style="margin-top:50px">
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
            :class="{active : active == page,current: data.current == page,undisable: data.current == page}"
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

    <!-- /课程列表 结束 -->

  </div>

</template>

<script>
import index from '@/api/index'
export default {
  data() {
    return {
      type:'',
      type0:"",
      type1:"",
      type00:"1",
      active:'1'
    }
    },
    created() {
    },
    //异步调用，调用一次
  //params: 相当于之前 this.$route.params.id  等价  params.id
  asyncData({ params, error }) {
   
    return index.projectSelect(1,4).then(response => { 
          return { projectList: response.data.data.rows,
          data:response.data.data,
          pages:Math.ceil(response.data.data.total/4) }
       })
  },
   methods:{
     selected(page){
     this.active = page;
},
    /*  gotoPageInit() {
      index.projectSelect(1,8,this.type)
        .then(response => {
          this.projectList = response.data.data.rows
          this.data.data=response.data.data,
          this.pages=Math.ceil(response.data.data.total/8) 
        })
    }, */
    //分页切换的方法
    //参数是页码数
    gotoPage(page) {
      index.projectSelect(page,4,this.type)
        .then(response => {
          this.projectList = response.data.data.rows
           this.data=response.data.data,
          this.pages=Math.ceil(response.data.data.total/4) 
        })
    },
   searchType00() {
     this.active='1'
      //设置对应变量值，为了样式生效，科技类0，开发类1
      this.type0 = ""
      this.type = ""
      this.type1 = ""
      this.type00 = "1"
      //调用方法查询
      this.gotoPage(1)
    },
    searchType0() {
      this.active='1'
      //设置对应变量值，为了样式生效，科技类0，开发类1
      this.type0 = "1"
      this.type = "0"
      this.type1 = ""
      this.type00 = ""
      //调用方法查询
      this.gotoPage(1)
    },
    searchType1() {
      this.active='1'
      //设置对应变量值，为了样式生效，科技类0，开发类1
      this.type0 = ""
      this.type = "1"
      this.type1 = "1"
      this.type00 = ""
      //调用方法查询
      this.gotoPage(1)
    },
   }
};

</script>
<style scoped>
p {
  height: 55px;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
	overflow: hidden;
}
.active{
  border-color: #4f89ea!important;
  color:#4f89ea;
}
.beijing{
  background: #f7f6f6;
  padding: 20px 20px;
}
.beijing:hover{
  background: #f3f5f5;
}
</style>