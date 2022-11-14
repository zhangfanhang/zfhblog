<script>
import Atropos from 'atropos/vue'
export default {
  components: {
    Atropos,
  },
}
</script>

<template>
  <Teleport to=".blog-hero">
    <div class="my-atropos">
      <Atropos :activeOffset="100">
        <div class="logo">
          <span class="logo-font" data-atropos-offset="15">ZB</span>
        </div>
      </Atropos>
    </div>
  </Teleport>
</template>

<style scoped>
.my-atropos {
  align-self: center;
  position: relative;
  bottom: 40%;
}

.logo {
  width: 180px;
  height: 180px;
  background-color: #ffd214;
  border-radius: 5px;
}
.logo-font {
  font-size: 130px;
  position: absolute;
  bottom: -20px;
  right: 4px;
  font-family: 'Avenir';
  font-weight: 800;
}
</style>
