<template>
    <div class="footer flex">
      <div>
        <router-link to="/home/news">消息</router-link>
      </div>
      <div>
        <router-link to="/home/contacts">联系人</router-link>
      </div>
      <div>
        <router-link to="/home/circle">动态</router-link>
      </div>
    </div>
</template>

<script>
    export default {
        name: "home-footer"
    }
</script>

<style scoped>
    .footer{
      height: 10%;
      border: 1px solid #ddd;
    }
  .flex{
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
    .flex div{
      width: 30%;
      height: 80%;
      text-align: center;
      line-height: 50px;
      /*border: 1px solid #000;*/
    }
</style>
