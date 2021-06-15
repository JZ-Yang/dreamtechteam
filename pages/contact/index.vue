<template>

  <div id="aCoursesList" class="bg-fa of" style="min-width:1160px">

    <!-- 讲师列表 开始 -->
    <section class="container">
      <header class="comm-title all-teacher-title">
        <h2 class="fl tac">
          <span class="c-333">联系我们</span>
        </h2>
    <section class="c-tab-title">
          <a id="subjectAll" href="#"  style="margin-top:30px"></a>
        </section>

      </header>
 
     <div class="twindex">
				<p><img src="~/assets/img/add.png" /><span class="c-333">地址：{{contact.address}}</span></p><p>
          <img src="~/assets/img/pho.png" /><span class="c-333">电话：{{contact.phone}}</span></p><p>
            <img class="ema" src="~/assets/img/ema.png" /><span class="c-333">邮箱：{{contact.email}}</span></p>
            <div class="c"><img class="donate" src="~/assets/img/donate.png" /><span class="c-333 zi">捐赠：</span><span class="c-333 donate donate1" v-html="contact.donate"></span></div>
           
			</div>
    </section>

    <!-- /讲师列表 结束 -->
 <div>
    <baidu-map class="bdwindow" :dragging="dragging" :center="center" :zoom="zoom" style="height:500px;width:1000px;margin:auto" :scroll-wheel-zoom='scroll'>
          <bm-info-window :position="center" :title="title" :show="show">
              <p class="bdwtext" v-html="contents"></p>
          </bm-info-window>
    </baidu-map>
  </div>
  </div>
 

</template>

<script>
import address from '@/api/address'
export default {
   data () {
    return {
      contact:{},
      img1:'',
       jump_path:"",
            center: {lng: 115.521303, lat: 38.894774},
            zoom: 15,  //缩放级别
            title:"地址：",
            contents: '华北电力大学保定二校区',  //标签内容
            show: true,  //显示标签
            scroll:true,  //地图缩放
            dragging:true,  //地图拖拽
    }
  },
  created() {
     //查询最新联系方式
    this.getContactSelectLatest()
  },
  methods:{
     //查询最新联系方式
    getContactSelectLatest() {
      address.getContactSelectLatest()
        .then(response => {
          console.log(response.data.data.Contact)
          this.contact = response.data.data.Contact
          this.img1='http://39.100.59.197:8080/dre@mtech_image/'+response.data.data.Contact.image
        })
    },
  }
};
</script>
<style scoped>
.twindex img{
  width: 40px;
  height: 40px;
  padding: 20px;
}
.twindex p{
  display: flex;
  direction: row;
}
.twindex span{
padding-top: 30px;
font-size: 20px;
}
.twindex .ema{
  width: 33px;
  height: 33px;
  padding-top: 24px;
  padding-left: 27px;
  padding-right: 20px;
}

.donate{
  
  height: 45px;
  margin-left: 5px;
  margin-right: -4px;
}
.c{
  display: flex;
  flex-direction: row;
}
.c .zi{
  width: auto!important;
  min-width: 60px;
}
.donate1{
  height: auto;
  min-height: 10px;
  padding-bottom: 20px;
  width: 75%;
}
</style>