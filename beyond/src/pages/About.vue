<template>
    <div>
      <about></about>
      vue codeblock-resizer.js


      <h1>{{ msg }}</h1>
      <h2>Essential Links<font-awesome-icon icon="user-secret" /></h2>
      <font-awesome-icon icon="user-secret" />
      <a href="blogList">aaaa</a>
      <ul>
        <li><router-link to="/notes/main" class="description_top">我的笔记 to="/notes/main"</router-link> </li>

        <li><router-link to="/main" class="description_top">to="/main"</router-link> </li>
        <li><router-link :to="{path:'/main'}" class="description_top">:to="{path:'/main'}"</router-link> </li>

        <li><router-link :to="{name:'blogList'}">:to="{name:'blogList'}"</router-link> </li>
        <li><router-link :to="{name:'blogContent'}">hotMsg :to="{name:'blogContent'}"</router-link> </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "About",
        data () {
          return {
            msg: 'Welcome to Your Vue.js App'
          }
        },
        TechnologyStack:[
          {"name":"vue codeblock-resizer.js","url":"https://www.npmjs.com/package/vue-fancybox"},
          {"name":"vue-fancybox","url":"https://www.npmjs.com/package/vue-fancybox"},
          {"name":"fancyBox --npm install @fancyapps/fancybox --save","url":"https://blog.csdn.net/kkstrive/article/details/78607094"},
          {"name":"vue-fontawesome  $ npm i --save @fortawesome/fontawesome-svg-core","url":"https://www.npmjs.com/package/@fortawesome/vue-fontawesome#get-started"},

        ],
    }
</script>

<style scoped>

</style>
