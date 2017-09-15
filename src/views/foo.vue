<template>
  <div class="wrapper" @click="update">
    <image :src="logoUrl" class="logo"></image>
    <text class="title">Hello {{target}}</text>
  </div>
</template>

<style>
  .wrapper { align-items: center; margin-top: 120px; }
  .title { font-size: 48px; }
  .logo { width: 360px; height: 82px; }
</style>

<script>
  //import logo from './assets/img/logo.png';
  export default {
    data: {
      logoUrl: "./assets/img/logo.png",
      target: 'World'
    },
    methods: {
      update: function (e) {
        this.target = 'iWeex'
        console.log('target:', this.target)
      }
    }
  }
</script>
