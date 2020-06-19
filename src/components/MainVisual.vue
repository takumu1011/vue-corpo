<template>
  <div class="l-mv">
    <div class="l-mv__in">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide>スライダー1</swiper-slide>
        <swiper-slide>スライダー2</swiper-slide>
        <swiper-slide>スライダー3</swiper-slide>
        <swiper-slide>スライダー4</swiper-slide>
        <swiper-slide>スライダー5</swiper-slide>
        <swiper-slide>スライダー6</swiper-slide>
        <swiper-slide>スライダー7</swiper-slide>
        <swiper-slide>スライダー8</swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        breakpoints: {
          768: {
            slidesPerView: 3
          }
        },
        spaceBetween: 30,
        freeMode: true,
        loop: true,
        autoplay: {
          delay: 2000
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        // scrollbar: {
        //   el: '.swiper-scrollbar'
        // }
      }
    }
  }
}
</script>

<style lang="scss">
  .swiper-container {
    width: 100%;
    height: 300px;
  }
  .swiper-slide {
    background: url(../assets/logo.png) no-repeat center center;
    background-size: contain;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
  }
  .swiper-pagination {
    &-bullet {
      background-color: #fff;
    }
  }
  .swiper-button-next::after,
  .swiper-button-prev::after {
    color: #fff;
  }
</style>