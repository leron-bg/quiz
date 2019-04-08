<template>
    <div class="wrapper">
        <div class="intro-wrapper">
            <div class="text-wrapper">
                <span class="ss-text for">For</span>
                <span class="ss-text the">The</span>
                <span class="ss-text future">Future</span>
                <div class="button-wrapper">
                    <router-link to="/question/1">
                        <button class="pulse-button">Start Quiz</button>
                    </router-link>
                </div>
                <violetCrystal 
                  size="big"
                  bottom="140px"
                  left="50px">
                </violetCrystal>
                <greenCrystal 
                  size="big"
                  bottom="168px"
                  right="85px">
                </greenCrystal>
                <img class="ss-logo" src="../assets/imgs/ss-logo.svg" alt="">
            </div>
        </div>
    </div>
</template>



<script>
  import GreenCrystal from './Shared/GreenCrystal.vue'
  import VioletCrystal from './Shared/VioletCrystal.vue'

  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      greenCrystal: GreenCrystal,
      violetCrystal: VioletCrystal
    }
  }
</script>

<style scoped>
  
.wrapper {
    width: 100%;
    height: 100vh;
}

.intro-wrapper {
      transform: translateY(-50%);
      position: relative;
      top: 50%;
      width: 45%;
      margin: auto;
}

.text-wrapper {
    display: inline-block;
    position: relative;
}

.ss-logo {
    position: absolute;
    right: -3px;
    width: 123px;
    padding-top: 15px;
}

.ss {
    transform: translateX(-50%) translateY(-50%) rotate(-90deg);
    position: absolute;
    font-weight: 700;
    font-size: 83px;
    font-family: proxima-nova, sans-serif;
    top: 208px;
}

.ss-text {
    display: block;
    text-transform: uppercase;
    font-weight: 800;
    font-size: 142px;
    font-family: proxima-nova, sans-serif;
    line-height: 108px;
    letter-spacing: -9px;
}

.ss-text.the {
    padding-left: 7px;
}

/*Pulse  Button */

.button-wrapper {
    position: absolute;
    top: 75px;
    right: 128px;
}

.pulse-button {
    color: white;
    font-family: proxima-nova, sans-serif;
    text-transform: uppercase;
    font-weight: 800;
    font-size: 15px;
    position: relative;
    width: 80px;
    height: 80px;
    border: none;
    box-shadow: 0 0 0 0 #fff;
    border-radius: 50%;
    background: #00d49b;
    cursor: pointer;
    -webkit-animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
    -moz-animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
    -ms-animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
    animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
  }
  .pulse-button:hover
  {
    -webkit-animation: none;-moz-animation: none;-ms-animation: none;animation: none;
  }

  @-webkit-keyframes pulse {to {box-shadow: 0 0 0 25px rgba(0, 212, 155, 0.70);}}
  @-moz-keyframes pulse {to {box-shadow: 0 0 0 25px rgba(0, 212, 155, 1);}}
  @-ms-keyframes pulse {to {box-shadow: 0 0 0 25px rgba(0, 212, 155, 1);}}
  @keyframes pulse {to {box-shadow: 0 0 0 25px rgba(0, 212, 155, 1);}}

  button:focus {
      outline: none;
  }

  @media only screen and (max-width: 600px) {
    .intro-wrapper {
      width: 100%;
      margin: 0;
    }

    .text-wrapper {
      left: -5px;
    }

    .ss-text {
      font-size: 65px;
      line-height: 50px;
      letter-spacing: -5px;
    }


    .ss-text.the {
      padding-left: 0;
      position: relative;
      left: -3px;
    }


    .ss-logo {
      width: 86px;
      padding-top: 5px;
      right: -3px;
    }

    .button-wrapper {
        position: absolute;
        top: 20px;
        right: 40px;
    }
    

    .pulse-button {
        width: 55px;
        height: 55px;
        font-size: 10px;
    }

    @-webkit-keyframes pulse {to {box-shadow: 0 0 0 10px rgba(0, 212, 155, 0.70);}}
    @-moz-keyframes pulse {to {box-shadow: 0 0 0 10px rgba(0, 212, 155, 1);}}
    @-ms-keyframes pulse {to {box-shadow: 0 0 0 10px rgba(0, 212, 155, 1);}}
    @keyframes pulse {to {box-shadow: 0 0 0 10px rgba(0, 212, 155, 1);}}

    .cub-wrapper {
      width: 120px;
      bottom: 88px;
    }

    .cub-wrapper-1 {
      left: 13px;
      top: 90px;
    }

    .cub1 {
      width: 50px;
    }

    .cub1-parts {
      width: 50px;
    }

    .cub {
      width: 50px;
      bottom: -58px;
    }

    .cub-parts {
      width: 50px;
      top: 0;
    }
  }

</style>
