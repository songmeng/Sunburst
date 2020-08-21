<template>
  <div class="pure-u-1-4 hidden_mid_and_down">
    <div id="sidebar">
      <div class="widget">
        <form class="search-form" action="//www.baidu.com/baidu" method="get" accept-charset="utf-8"
              target="_blank"><input type="search" name="word" maxlength="20" placeholder="Search"><input
          type="hidden" name="si" value="http://yoursite.com"><input name="tn" type="hidden" value="bds"><input
          name="cl" type="hidden" value="3"><input name="ct" type="hidden" value="2097152"><input name="s"
                                                                                                  type="hidden"
                                                                                                  value="on"></form>
      </div>
      <div class="widget">
        <div class="widget-title"><i class="fa fa-folder-o"> 分类</i></div>
        <ul class="category-list">
          <li class="category-list-item"><a class="category-list-link" href="/categories/Android/">Android</a></li>
          <li class="category-list-item"><a class="category-list-link" href="/categories/Hexo/">Hexo</a></li>
          <li class="category-list-item"><a class="category-list-link" href="/categories/Life/">Life</a></li>
        </ul>
      </div>
      <div class="widget">
        <div class="widget-title"><i class="fa fa-star-o"> 标签</i></div>
        <div class="tagcloud"><a href="/tags/Android/" style="font-size: 15px;">Android</a> <a href="/tags/Hexo/"
                                                                                               style="font-size: 15px;">Hexo</a>
          <a href="/tags/生活/" style="font-size: 15px;">生活</a></div>
      </div>
      <div class="widget">
        <div class="widget-title"><i class="fa fa-file-o"> 最近文章</i></div>
        <ul class="post-list">
          <li class="post-list-item"><a class="post-list-link" href="/2018/06/08/生活小结2018年中/">生活小结2018年中</a></li>
          <li class="post-list-item"><a class="post-list-link" href="/2018/03/22/essay/">essay</a></li>
          <li class="post-list-item"><a class="post-list-link" href="/2018/03/21/Android开发中问题汇总/">Android开发中问题汇总</a>
          </li>
          <li class="post-list-item"><a class="post-list-link" href="/2018/03/20/learn to drive/">learn to drive</a>
          </li>
          <li class="post-list-item"><a class="post-list-link" href="/2018/03/20/小结/">小结</a></li>
          <li class="post-list-item"><a class="post-list-link" href="/2018/03/20/ceshi/">ceshi</a></li>
          <li class="post-list-item"><a class="post-list-link" href="/2018/03/20/Hexo问题汇总/">Hexo问题汇总</a></li>
          <li class="post-list-item"><a class="post-list-link" href="/2018/03/01/Hexo配置学习资料/">Hexo配置学习资料</a></li>
          <li class="post-list-item"><a class="post-list-link" href="/2018/03/01/about/">关于hexo</a></li>
          <li class="post-list-item"><a class="post-list-link" href="/2018/03/01/test/">test</a></li>
        </ul>
      </div>
      <div class="widget">
        <div class="widget-title"><i class="fa fa-external-link"> 友情链接</i></div>
        <ul></ul>
        <a href="http://www.example1.com/" title="site-name1" target="_blank">site-name1</a>
        <ul></ul>
        <a href="http://www.example2.com/" title="site-name2" target="_blank">site-name2</a>
        <ul></ul>
        <a href="http://www.example3.com/" title="site-name3" target="_blank">site-name3</a></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "BlogCategory"
    }
</script>

<style scoped>

</style>
