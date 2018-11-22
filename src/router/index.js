import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/home/home'
import content from  '@/home/components/home-contents'

import news from  '@/home/components/news/news'
import circle from  '@/home/components/circle/Circle'
import contacts from  '@/home/components/contacts/contacts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children:[
        {
          path: '/',
          name: 'news',
          component: news
        }
      ]
    },
    //跳转路由
    {
      path:'/home',
      name:'home',
      component:home,
      children:[
        //消息
        {
          path:'/home/news',
          name:'news',
          component:news
        },
        //联系人
        {
          path:'/home/contacts',
          name:'contacts',
          component:contacts
        },
        //动态
        {
          path:'/home/circle',
          name:'circle',
          component:circle
        }
      ]
    }
  ]
})
