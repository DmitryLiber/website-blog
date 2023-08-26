<template lang="pug">
.container.slider
  swiper(
    :modules="modules"
    :pagination="{type: 'fraction'}"
    :navigation="true"
    :loop="true"
  )
    swiper-slide(v-for="item, index in data.body").slider__img
      img(:src="item" :alt="'Слайд ' + (index + 1)" width="1110" height="550")
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

export default {
  name: 'Slider',
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return {
      modules: [Navigation, Pagination],
    }
  },
}
</script>

<style global lang="scss">
.slider {
  &__img {
    aspect-ratio: 1110 / 550;
    width: 100%;
    height: auto;
    max-height: 550px;

    img {
      aspect-ratio: 1110 / 550;

      @include mq($xl) {
        max-width: 1110px;
      }
    }
  }

  .swiper-slide.slider__img {
    img {
      @include mq($xl) {
        min-width: auto;
      }
    }
  }

  .swiper-wrapper {
    padding-bottom: 15px;

    @include mq($m) {
      padding-bottom: 30px;
    }

    @include mq($l) {
      padding-bottom: 50px;
    }
  }

  .swiper-button-next,
  .swiper-button-prev {
    --swiper-navigation-size: 20px;

    background-color: cl(secondary);
    height: 60px;
    width: 60px;
    font-weight: 600;
    color: cl(whte);
    transition: background-color $time;
    user-select: none;
    transform: translateY(-40px);

    &::after {
      height: 20px;
      width: 12px;
    }

    @include mq-max($ms) {
      display: none;
    }

    &:hover {
      @include mq-hover() {
        background-color: cl(primary);
      }
    }
  }

  .swiper-pagination {
    bottom: 0;
    text-align: center;
  }
}
</style>
