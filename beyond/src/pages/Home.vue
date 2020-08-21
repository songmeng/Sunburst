<template>
  <div class="hello">
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
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  /*width: 100%;*/
}
li {
  /*width: 100%;*/
  /*display: inline-block;*/
  margin: 0 10px;
  padding:5px 5px;
  text-align: start;
  box-sizing: border-box;
}


a {
  color: #42b983;
}
</style>
