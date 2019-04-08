<template>
  <div 
    class="cub-wrapper"
    :style="{bottom: bottom, left: left}">
    <img :class="['cub', size]" src="../../assets/imgs/violet-crystal-1.svg">
    <img :class="['cub-parts', size]" src="../../assets/imgs/violet-crystal-2.svg">
  </div>
</template>
<script>
  export default {
    props: ['size', 'top', 'bottom', 'right', 'left']
  }

</script>
<style scoped>
  .small {
    width: 55px;
  }

  .medium {
    width: 75px
  }

  .big {
    width: 90px;
  }

  .cub-wrapper {
    display: inline-block;
    position: absolute;
  }

  .cub {
    position: absolute;
    z-index: 1;
    animation: drifting3 1s linear 1s 1 normal forwards, drifting3 20s cubic-bezier(0.33, 0, 0.66, 1) 1s infinite;
  }

  .cub-parts {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    animation: drifting3 1s linear 1s 1 normal forwards, drifting3 20s cubic-bezier(0.33, 0, 0.66, 1) 1s infinite;
  }
</style>