<template>
    <div 
      class="cub-wrapper" 
      :style="{top:top, bottom: bottom, right: right, left: left}">
        <img 
          :class="['cub', size]"
          src="../../assets/imgs/green-crystal-1.svg">
        <img 
          :class="['cub-parts', size]" 
          src="../../assets/imgs/green-crystal-2.svg">
    </div>
</template>

<script>
export default {
  props: ['size', 'top', 'bottom', 'right', 'left']
}
</script>
<style scoped>
  .small {
    width: 45px;
  }

  .medium {
    width: 65px
  }

  .big {
    width: 90px;
  }

 .cub-wrapper {
    display: inline-block;
    position: absolute;
  }

  .cub {
    z-index: -1;
    position: absolute;
    left: 15px;
    animation: drifting3 1s linear 1s 1 normal forwards, drifting3 20s cubic-bezier(0.33, 0, 0.66, 1) 1s infinite;
  }

 .cub-parts {
    position: absolute;
    left: 15px;
    z-index: 0;
    animation: drifting3 1s linear 1s 1 normal forwards, drifting3 20s cubic-bezier(0.33, 0, 0.66, 1) 1s infinite;
  }

  @keyframes drifting3 {
    0% {transform: rotate(0deg) translate(0%, 0%)}
    25% {transform: rotate(7deg) translate(5%, -5%)}
    50% {transform: rotate(0deg) translate(-5%, 1%)}
    75% {transform: rotate(7deg) translate(5%, -5%)}
    100% {transform: rotate(0deg) translate(0%, 0%)}
  }

</style>