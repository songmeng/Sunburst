<template>
  <div id="header">
    <div class="site-name"><h1 class="hidden">Samon</h1><a id="logo" href="/.">Samon</a>
      <p class="description">to be a better man</p></div>
    <div id="nav-menu"><a class="current" href="/."><i class="fa fa-home"> 首页</i></a><a href="/archives/"><i
      class="fa fa-archive"> 归档</i></a><a href="/about/"><i class="fa fa-user"> 关于</i></a><a href="/atom.xml"><i
      class="fa fa-rss"> 订阅</i></a></div>
  </div>
</template>

<script>
  export default {
    name: "BlogHeader"
  }
</script>

<style scoped>
  #header {
    padding: 58px 0 0;
    text-align: left;
    border-bottom: 1px solid #ddd;
    position: relative; }
  #header .site-name {
    margin-bottom: 40px; }
  #header .site-name h1 {
    padding: 0;
    margin: 0;
    height: 0;
    overflow: hidden; }
  #header .site-name #logo {
    font: bold 38px/1.12 "Times New Roman", Georgia, Times, sans-serif;
    color: #555; }
  #header .site-name #logo span, #header .site-name #logo:hover {
    color: #777; }
  #header .site-name .description {
    margin: .2em 0 0;
    color: #999; }
  #header #nav-menu {
    margin: 10px 0 -1px;
    padding: 0;
    position: absolute;
    right: 0;
    bottom: 0; }
  #header #nav-menu a {
    display: inline-block;
    padding: 3px 20px 3px;
    line-height: 30px;
    color: #444;
    font-size: 13px;
    border: 1px solid transparent; }
  #header #nav-menu a:hover {
    border-bottom-color: #444; }
  #header #nav-menu a.current {
    border: 1px solid #ddd;
    border-bottom-color: #fff; }


</style>
