<template>
  <div class="works">
    <h2 class="works__ttl">Works</h2>
    <ul class="works__list">
      <li class="work" v-for="work in works" :key="work.name">
        <div class="work__in">
          <div class="work__img"></div>
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
          name: "作品名1",
          date: "2020/10/11"
        },
        {
          name: "作品名2",
          date: "2020/10/11"
        },
        {
          name: "作品名3",
          date: "2020/10/11"
        },
        {
          name: "作品名4",
          date: "2020/10/11"
        },
        {
          name: "作品名5",
          date: "2020/10/11"
        },
        {
          name: "作品名6",
          date: "2020/10/11"
        },
        {
          name: "作品名7",
          date: "2020/10/11"
        },
        {
          name: "作品名8",
          date: "2020/10/11"
        }
      ]
    };
  }
};
</script>


<style lang="scss">
.works {
  width: 80%;
  margin: 0 auto;
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
  box-shadow: 0 0 0 10px #222;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
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
    background: url(../assets/logo.png) no-repeat center center #000;
    background-size: contain;
    @media screen and (max-width: 768px) {
      height: auto;
      padding-top: 50%;
    }
  }
  &__name {
    font-size: 22px;
  }
  &__date {
    margin-right: 20px;
    text-align: right;
  }
}
</style>