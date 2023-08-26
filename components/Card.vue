<template lang="pug">
article.card
  picture.card__img
    img(:src="data.image" :alt="data.title")
  h3.card__title {{ data.title }}
  NuxtLink(:to="data.link").btn Читать
</template>

<script>
import Btn from '@/components/ui/Btn.vue'

export default {
  name: 'Card',
  components: {
    Btn,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style global lang="scss">
.card {
  @include mq($m) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  &__img {
    width: 100%;
    height: 200px;
    margin-bottom: 15px;

    @include mq($m) {
      height: 250px;
      margin-bottom: 20px;
    }

    @include mq($l) {
      height: 32 0px;
    }
  }

  &__title {
    @include mq($m) {
      flex-grow: 1;
    }
  }
}
</style>
