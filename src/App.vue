<template>
  <div id="app">
    <div class="container">
      <div class="container__cover" @click="SlideScreen"></div>
      <Header @mobile-click="SlideScreen"/>
      <MainVisual />
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
      <Footer />
    </div>
    <nav class="navi">
      <ul class="navi-list">
        <li class="navi-list__item">
          <router-link to="/" @click.native="SlideScreen">HOME</router-link>
        </li>
        <li class="navi-list__item">
          <router-link to="/about" @click.native="SlideScreen">ABOUT</router-link>
        </li>
        <li class="navi-list__item">
          <router-link to="/works" @click.native="SlideScreen">WORKS</router-link>
        </li>
        <li class="navi-list__item">
          <router-link to="/news" @click.native="SlideScreen">NEWS</router-link>
        </li>
      </ul>
    </nav>
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

<style lang="scss" scoped>
@keyframes showNavi {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
#app {
  font-family: 'Nanum Gothic', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #ddd;
}
//
.container {
  position: relative;
  z-index: 1;
  overflow: hidden;
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
  .container__cover {
    opacity: 1;
    visibility: visible;
    background-color: rgba(0,0,0,.3);
  }
}
.container.is-open + .navi {
    & > .navi-list {
      & > .navi-list__item {
        animation: showNavi 0.4s ease-in 0s forwards;
        @for $i from 1 through 4 {
          &:nth-child(#{$i}) {
            animation-delay: #{$i * 0.2}s;
          }
        }
      }
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

.navi {
  position: fixed;
  top: 60px;
  right: 0;
  z-index: 0;
  &-list {
    margin: 50px 30px;
    padding: 0;
    font-size: 32px;
    list-style: none;
    &__item {
      position: relative;
      margin: 50px 0;
      opacity: 0;
      transform: tranlateY(20px);
      &:hover::before {
        transform: scaleX(1);
      }
      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transform: scaleX(0);
        background-color: rgba(0,0,0,.2);
        transition: transform 0.2s ease-out 0s;
        transform-origin: left;
      }
      & > a {
        position: relative;
        color: #fff;
        text-decoration: none;
      }
    }
  }
}
</style>
