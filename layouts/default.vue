<template>
  <div class="in-wrap">
    <!-- 公共头引入 -->
    <header id="header">
      <section class="container">
        <h1 id="logo">
          <router-link to="/" title="Dre@mTech实验室">
            <img src="~/assets/img/logo.png" width="110%" alt="Dre@mTech实验室">
          </router-link>
        </h1>
        <div class="h-r-nsl">
          <ul class="nav">
            <router-link to="/" tag="li" active-class="current" exact>
              <a>首页</a>
            </router-link>
            <router-link to="/team" tag="li" active-class="current">
              <a>研究团队</a>
            </router-link>
            <router-link to="/direction" tag="li" active-class="current">
              <a>研究方向</a>
            </router-link>
            <router-link to="/projec" tag="li" active-class="current">
              <a>项目成果</a>
            </router-link>
            <router-link to="/man" tag="li" active-class="current">
              <a>成员风采</a>
            </router-link>
             <router-link to="/contact" tag="li" active-class="current">
              <a>联系我们</a>
            </router-link>
          </ul>
          <!-- / nav -->
       
        </div>
        <aside class="mw-nav-btn">
          <div class="mw-nav-icon"></div>
        </aside>
        <div class="clear"></div>
      </section>
    </header>
    <div class=t01></div>
    <!-- /公共头引入 -->
      
    <nuxt/>

    <!-- 公共底引入 -->
    <footer id="footer" style="min-width:1160px">
      <section class="container">
        <div class>
          <h4 class="hLh30">
            <span class="fsize18 f-fM c-ccc">友情链接</span>
          </h4>
          <ul class="of flink-list">
            <li>
              <a href="https://cs.ncepu.edu.cn/index.htm" title="华北电力大学计算机系" target="_blank">华北电力大学计算机系</a>
            </li>
          </ul>
          <div class="clear"></div>
        </div>
       <div class="b-foot">
          <section class="fl col-7">
            <section class="mr20">
              <section class="b-f-link">
                <span>邮编：071003</span>|
                <span>Email：ncepu_liudong@foxmail.com</span>

              </section>
              <section class="b-f-link mt10">
                <span>版权所有Dre@mTech实验室</span>
                <img src="~/assets/img/beian.png" style="margin-right:-10px">
                <a href="" target="_blank">冀公网安备 13060602001232</a>
                <a href="" target="_blank">冀ICP备20005604号</a>
              </section>
            </section>
          </section>
          
          <div class="clear"></div>
        </div>
      </section>
    </footer>
    <!-- /公共底引入 -->
  </div>
</template>
<script>
import "~/assets/css/reset.css";
import "~/assets/css/theme.css";
import "~/assets/css/global.css";
import "~/assets/css/web.css";

export default {};
</script>
<style scoped>
#header{
  position: fixed;
            z-index: 10;
            left: 0;
            right: 0;
            top: 0;
}
.h-r-nsl .nav{
margin-left: 30px;
}
.t01{
	height:140px;/*这里的height要和导航栏的一样*/
	position:relative;/*这个用来占位置*/
	}
</style>