<template>
  <div class="l-mv">
    <div class="l-mv__in">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide>
          <img class="swiper-img" src="../assets/slide01.jpg" alt />
        </swiper-slide>
        <swiper-slide>
          <img class="swiper-img" src="../assets/slide02.jpg" alt />
        </swiper-slide>
        <swiper-slide>
          <img class="swiper-img" src="../assets/slide03.jpg" alt />
        </swiper-slide>
        <swiper-slide>
          <img class="swiper-img" src="../assets/slide04.jpg" alt />
        </swiper-slide>
        <swiper-slide>
          <img class="swiper-img" src="../assets/slide05.jpg" alt />
        </swiper-slide>
        <swiper-slide>
          <img class="swiper-img" src="../assets/slide06.jpg" alt />
        </swiper-slide>
        <swiper-slide>
          <img class="swiper-img" src="../assets/slide07.jpg" alt />
        </swiper-slide>
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
        effect: 'coverflow',
        centeredSlides: true,
        spaceBetween: 30,
        loop: true,
        autoplay: {
          delay: 5000
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
        // scrollbar: {
        //   el: '.swiper-scrollbar'
        // }
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.l-mv {
  margin: 70px 0;
}
.swiper-container {
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
  overflow: visible;
}
.swiper-slide {
  background: url(../assets/logo.png) no-repeat center center;
  background-size: contain;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  & > .swiper-img {
    @media screen and (max-width: 768px) {
      transform: scale(1.4);
      transition: transform 2s ease-out 0s;
    }
  }
}

.swiper-container-horizontal > .swiper-pagination {
  bottom: -50px;
}
.swiper-pagination-bullet-active {
  background-color: #000;
}
.swiper-button-next::after,
.swiper-button-prev::after {
  color: #000;
}
.swiper-slide-active {
  & > .swiper-img {
    transform: none;
  }
}
</style>