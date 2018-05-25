import Vue from 'vue'   //导入Vue
import Router from 'vue-router'  //导入vue-router库
import Page1 from '@/pages/page1'

Vue.use(Router)   //全局注册Router组件,它会绑定到Vue实例里面

export default new Router({
  routes: [
    {
      path: '/',   //访问路径
      name: 'page1',   //路径名
      component: Page1    //访问的组件，即访问‘/’，它会加载Page1组件所有的内容。
    }
  ]
})
