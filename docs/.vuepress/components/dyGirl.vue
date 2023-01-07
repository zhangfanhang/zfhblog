<template>
  <div class="container">
    <VideoPlay width="100%" height="667px" autoPlay :src="src" @ended="ended" />
  </div>
</template>

<script>
import axios from 'axios'
import 'vue3-video-play/dist/style.css'
import { videoPlay } from 'vue3-video-play'
export default {
  data() {
    return {
      src: '',
    }
  },
  components: {
    VideoPlay: videoPlay,
  },
  methods: {
    ended() {
      this.getGirl()
    },
    getGirl() {
      axios
        .get('https://v.api.aa1.cn/api/api-girl-11-02/index.php?type=json')
        .then((res) => {
          this.src = res.data.mp4
        })
    },
  },
  mounted() {
    this.getGirl()
  },
}
</script>
<style scoped>
.container {
  display: flex;
  justify-content: center;
}
</style>
