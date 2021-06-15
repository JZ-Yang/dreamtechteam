<template>

  <div id="aCoursesList" class="bg-fa of" style="min-width:1160px">

    <!-- /课程列表 开始 -->

    <section class="container">

      <header class="comm-title">

        <h2 class="fl tac">

          <span class="c-333">成员风采</span>

        </h2>

      </header>

      <section class="c-sort-box">

       
        <div class="js-wrap">

          <section class="fl">

            <ol class="js-tap clearfix">
              <li :class="{'current bg-orange' :type0!=''}">
                <a title="全部"  href="javascript:void(0);" @click="searchType()">全部</a>
              </li>
              <li :class="{'current bg-orange' :type1!=''}">
                <a title="毕业生"  href="javascript:void(0);" @click="searchType1()">毕业生</a>
              </li>
              <li :class="{'current bg-orange' :type2!=''}">
                <a title="研究生" href="javascript:void(0);" @click="searchType2()">研究生</a>
              </li>
              <li :class="{'current bg-orange' :type3!=''}">
                <a title="本科生" href="javascript:void(0);" @click="searchType3()">本科生
                </a>
              </li>
            </ol>
          </section>
        
          <el-select v-model="value" placeholder="按年级查询" style="width:11%;margin-left:8px;margin-top:-3px">
            <el-option
              v-for="item in gradeList"
              :key="item"
              :label="item"
             :value="item"
             >
            </el-option>
          </el-select>
        </div>

        
          <article class="comm-course-list">
<!-- 成员风采 开始 -->
      <div style="margin-top:30px">
        <section class="container">
          <div>
            <article class="i-teacher-list">
              <ul class="of">
                <li v-for="item in studentList" :key="item.id">
                  <section class="i-teach-wrap">
                    <div class="i-teach-pic">
                      <a :href="'/man/'+item.id" :title="item.name" target='_blank'>
                        <img class="img" :alt="item.name" :src="bindImg(item.img)">
                      </a>
                    </div>
                    <div class="mt10 hLh30 txtOf tac">
                      <a :href="'/man/'+item.id" target='_blank' :title="item.name" class="fsize18 c-666">{{item.name}}</a>
                    </div>
                    
                    <div class="mt15 i-q-txt">
                      <p class="fsize14 c-999" v-html="item.text" ></p>
                    </div>
                  </section>
                </li>
              </ul>
              <div class="clear"></div>
            </article>
          </div>
        </section>
      </div>
            <div class="clear"></div>
          </article>     

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
    <!-- /课程列表 结束 -->
  </div>
</template>
<script>

import index from '@/api/index'
export default {
  data() {
    return {
      type:'',
      type0:"1",
      type1:"",
      type2:"",
      type3:"",
      selId:'',
			gradeList: [],
      value:'',
      pages:'',
       active:'1'
      }
    },
  created() {
  this.queryAllGrade()
  this.gotoPage(1)
  },
  //异步调用，调用一次
  //params: 相当于之前 this.$route.params.id  等价  params.id
  asyncData({ params, error }) {
   
    return index.studentSelect(1,8).then(response => { 
     
          return { studentList: response.data.data.rows,        
          data:response.data.data,
          pages:Math.ceil(response.data.data.total/8) }
       })
  },
  watch: {
    value() {
      this.gotoPage(1)
    }
  },
  methods:{
     selected(page){
     this.active = page;
    },
    bindImg(img) {
	    return 'http://39.100.59.197:8080/dre@mtech_image/'+img;
    },
   
    //分页切换的方法
    //参数是页码数
    gotoPage(page) {
      
      index.studentSelectType(page,8,this.type,this.value)
        .then(response => {
          this.studentList = response.data.data.rows
           this.data=response.data.data,
          this.pages=Math.ceil(response.data.data.total/8) 
        })
    },
    //查询所有年级
    queryAllGrade(){
        index.queryAllGrade(this.type)
        .then(response => {
          this.gradeList = response.data.data.grades
        })
    },
    //全部
    searchType() {
      //设置对应变量值，为了样式生效
      this.active='1'
      this.value=''
      this.type0 = "1"
      this.type = ""
      this.type1 = ""
      this.type2 = ""
      this.type3 = ""
      this.queryAllGrade()
      //调用方法查询
      this.gotoPage(1)
    },
    //毕业生
    searchType1() {
      this.active='1'
      this.value=''
      //设置对应变量值，为了样式生效
      this.type0 = ""
      this.type = "1"
       this.type1 = "1"
      this.type2 = ""
      this.type3 = ""
      this.queryAllGrade()
      //调用方法查询
      this.gotoPage(1)
    },
  //毕业生
    searchType2() {
      this.active='1'
      //设置对应变量值，为了样式生效
      this.value=''
      this.type0 = ""
      this.type = "2"
       this.type1 = ""
      this.type2 = "1"
      this.type3 = ""
      this.queryAllGrade()
      //调用方法查询
      this.gotoPage(1)
    },
    //毕业生
    searchType3() {
      this.active='1'
      //设置对应变量值，为了样式生效
      this.value=''
      this.type0 = ""
      this.type = "3"
       this.type1 = ""
      this.type2 = ""
      this.type3 = "1"
      this.queryAllGrade()
      //调用方法查询
      this.gotoPage(1)
    },
  }
}
</script>
<style scoped>
.sel-choose{
	-webkit-appearance: none; /*去除chrome浏览器的默认下拉图片*/
	-moz-appearance: none; /*去除Firefox浏览器的默认下拉图片*/
  width: 80px;
  height: 30px;
  border-radius: 5%;
	border-color:#83adfc;
}
.default-color {
	font-size: 14px;
	color: #9b9b9b;
}
.nianji{
  line-height: 40px;
    color: #666;
    font-size: 14px;
}
.active{
  border-color: #4f89ea!important;
  color:#4f89ea;
}
.i-q-txt p{
  height: 45px!important;
}
</style>


