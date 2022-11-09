<template>
  <div class="busuanzi">
    本站总访问量
    <span id="busuanzi_value_site_pv"></span> 次
  </div>
</template>

<script>
/* 不蒜子访问量统计 */
import script from 'busuanzi.pure.js'

export default {
  // 监听,当路由发生变化的时候执行
  watch: {
    $route(to, from) {
      if (to.path != from.path) {
        script.fetch()
      }
    },
  },
}
</script>
<style scoped>
.busuanzi {
  font-size: 14px !important;
}
</style>
