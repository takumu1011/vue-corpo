<template>
  <div class="news">
    <div class="news__in">
      <section class="news__sec">
        <ul class="news-list">
          <li class="news-list__item" v-for="news in newsList" :key="news.id">
            <h3 class="news__ttl">{{ news.title }}</h3>
            <p class="news__body">{{ news.body}}</p>
          </li>
        </ul>
      </section>
      <section class="news__current" @click="hoge"></section>
    </div>
  </div>
</template>


<script>
// import news from '../assets/news.json';
export default {
  data() {
    return {
      newsList: ''
    };
  },
  created() {
    this.axios.get('../assets/news.json').then(response => (this.newsList = response));
  },
  methods: {
    hoge() {
      console.log(this.newsList)
    }
  }
};
</script>


<style lang="scss" scoped>
.news {
  &__sec {
    height: 800px;
    position: sticky;
    top: 0;
  }
  &__current {
    position: relative;
    z-index: 2;
    height: 800px;
    background-color: #333;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #222;
      transform: skew(-40deg);
    }
  }
  &-list {
    width: 80%;
    margin: 0 auto;
    padding: 0;
    list-style: none;
  }
  &__ttl {
    margin: 10px 0;
    font-size: 22px;
  }
  &__body {
    margin: 0;
    text-align: left;
  }
  &__txt {
    display: flex;
    height: 100%;
    margin: 0;
    justify-content: center;
    align-items: center;
  }
}
</style>