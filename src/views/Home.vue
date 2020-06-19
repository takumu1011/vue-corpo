<template>
  <div class="l-home">
    <div class="l-home__in">
      <Overview/>
      <div class="ph-wrap">
        <div class="ph" :class="idea.ttl" v-for="idea in ideas" :key="idea.ttl">
          <h2 class="ph__ttl" :class="idea.ttl + '__ttl'">{{ UpperTxt(idea.ttl) }}</h2>
          <div class="ph__des" :class="idea.ttl + '__des'">
            <p class="ph__txt" :class="idea.ttl + '__txt'">{{ idea.txt}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Overview from '../components/Overview.vue';
export default {
  data() {
    return {
      ideas: [
        {
          ttl: "mission",
          txt:
            "テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。"
        },
        {
          ttl: "vision",
          txt:
            "テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。"
        },
        {
          ttl: "value",
          txt:
            "テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。"
        }
      ]
    };
  },
  mounted() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0
    }
    const eles = document.querySelectorAll('.ph');
    eles.forEach(target => this.onIntersect(target, options));
  },
  methods: {
    UpperTxt(txt) {
      return txt.toUpperCase();
    },
    onIntersect(target, options = {}) {
      const observer = new IntersectionObserver(this.addShowClass, options);
      observer.observe(target);
    },
    addShowClass(entries) {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.classList.add('show');
        }
        else {
          entry.target.classList.remove('show');
        }
      });
    }
  },
  components: {
    Overview
  }
};
</script>

<style lang="scss">
.l-home{
  padding: 20px 0;
  color: #f5f5f5;
  background: linear-gradient(260deg, rgba(0,0,0,.9), transparent);
  &__in {
    width: 70%;
    margin: 0 auto;
  }
}
.ph-wrap {
}
.ph {
  margin: 50px 0;
  opacity: 0;
  transform: translateX(-40px);
  transition: opacity 1.5s cubic-bezier(0.33, 1, 0.68, 1) 0s, transform 1.5s cubic-bezier(0.33, 1, 0.68, 1) 0s;
  &.show {
    opacity: 1;
    transform: none;
  }
  @media screen and (max-width: 768px) {
    margin: 30px 0;
  }
  &__ttl {
    position: relative;
    text-align: left;
    font-size: 24px;
    letter-spacing: 14px;
    @media screen and (max-width:768px) {
      text-align: center;
    }
    &::before {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 100%;
      border-bottom: 1px solid #000;
    }
  }
  &__des {
    width: 75%;
    margin: 50px auto 0;
    line-height: 1.8em;
    text-align: left;
    @media screen and (max-width: 768px) {
      width: auto;
      margin: 20px auto 0;
    }
  }
}
</style>
