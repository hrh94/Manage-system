<template>
  <div id="app">
    <transition name="bounce">
      <router-view/>
    </transition>
  </div>
</template>
<script>
  module.exports = {
    name: 'app'
  }
</script>
<style>
  @import "../static/css/main.css";

  .bounce-enter-active {
    animation: bounce-in .5s;
    -webkit-animation: bounce-in .5s;
  }

  .bounce-leave-active {
    animation: bounce-out .2s;
    -webkit-animation: bounce-out .2s;
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    10% {
      transform: scale(0.15);
    }
    20% {
      transform: scale(0.3);
    }
    30% {
      transform: scale(0.45);
    }
    40% {
      transform: scale(0.60);
    }
    50% {
      transform: scale(0.75);
    }
    60% {
      transform: scale(0.9);
    }
    70% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes bounce-out {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.95);
    }
    100% {
      transform: scale(0);
    }
  }
</style>
