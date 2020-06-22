<template>
  <div class="works">
    <h2 class="works__ttl">Works</h2>
    <ul class="works__list">
      <li class="work" v-for="work in works" :key="work.name">
        <div class="work__in">
          <img class="work__img" :src="require('../assets/'+ work.img)">
          <div class="work__detail">
            <h3 class="work__name">{{ work.name }}</h3>
            <p class="work__date">{{ work.date }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      works: [
        {
          name: "イルカと釣り",
          img: 'work1.jpg',
          date: "2020/06/22"
        },
        {
          name: "大聖堂",
          img: 'work2.jpg',
          date: "2020/06/22"
        },
        {
          name: "船と夕焼け",
          img: 'work3.jpg',
          date: "2020/06/22"
        },
        {
          name: "花",
          img: 'work4.jpg',
          date: "2020/06/22"
        },
        // {
        //   name: "作品名5",
        //   date: "2020/10/11"
        // },
        // {
        //   name: "作品名6",
        //   date: "2020/10/11"
        // },
        // {
        //   name: "作品名7",
        //   date: "2020/10/11"
        // },
        // {
        //   name: "作品名8",
        //   date: "2020/10/11"
        // }
      ]
    };
  }
};
</script>


<style lang="scss" scoped>
@keyframes cardMove {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(20px);
  }
}
.works {
  width: 80%;
  margin: 0 auto 50px;
  &__ttl {
    font-size: 60px;
  }
  &__list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-content: space-between;
    flex-wrap: wrap;
  }
}
.work {
  position: relative;
  box-sizing: border-box;
  width: 40%;
  min-width: 250px;
  margin: 20px 0;
  box-shadow: 0 0 10px 0 #222;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  animation: cardMove 2.5s linear 0s alternate infinite;
  transition: all 0.4s ease-out 0s;
  @media screen and (max-width: 768px) {
    width: 80%;
  }
  &:hover {
    transform: translateY(10px);
    box-shadow: 0 0 0 2px #222;
  }
  &__img {
    width: 100%;
    height: 220px;
    @media screen and (max-width: 768px) {
      height: auto;
    }
  }
  &__name {
    width: 180px;
    margin: 20px auto;
    font-size: 28px;
    background-color: #ff00ff;
    border-radius: 25px;
  }
  &__date {
    margin-right: 20px;
    text-align: right;
  }
}
</style>