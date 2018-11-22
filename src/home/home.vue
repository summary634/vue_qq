<template>
    <div class="home">
        <home-header></home-header>
        <router-view></router-view>
        <home-footer></home-footer>
    </div>
</template>

<script>
  import HomeHeader from './components/home-header'
  import HomeFooter from './components/home-footer'
    export default {
        name: "home",
        components:{
          HomeHeader,
          HomeFooter
        }
    }
</script>

<style scoped>
     .home{
       width: 100%;
       height: 40rem;
       /*background: gold;*/
       border-radius: 5px;
     }
</style>
