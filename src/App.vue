<template>
  <div id="app">
    <div class="container">
      <div class="container__cover" @click="SlideScreen"></div>
      <Header @mobile-click="SlideScreen"/>
      <div id="nav">
        <router-link to="/">Home</router-link>|
        <router-link to="/about">About</router-link>|
        <router-link to="/works">Works</router-link>|
        <router-link to="/fuga">Fuga</router-link>|
        <router-link to="/bar">Bar</router-link>|
        <router-link to="/baz">Baz</router-link>
      </div>
      <MainVisual />
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import MainVisual from "./components/MainVisual.vue";
export default {
  data() {
    return {};
  },
  methods: {
    SlideScreen() {
      const container = document.querySelector('.container');
      container.classList.toggle('is-open');
    }
  },
  components: {
    Header,
    Footer,
    MainVisual
  }
};
</script>

<style lang="scss">
#app {
  font-family: 'Nanum Gothic', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #ddd;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
//
.container {
  position: relative;
  background-color: #fff;
  transition: all 0.45s ease 0s;
  &__cover {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 20;
    width: 100%;
    height: 100%;
    opacity: 0;
    visibility: hidden;
    cursor: pointer;
  }
}
.container.is-open {
  transform: translate(-200px, 60px);
  box-shadow: 15px 15px 15px 10px #222;
  & .container__cover {
    opacity: 1;
    visibility: visible;
    background-color: rgba(0,0,0,.3);
  }
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.65s ease-out 0s;
}
</style>
