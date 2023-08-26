<template lang="pug">
section.container
  h2(v-if="data.slug !== 'home'") {{ data.body.title }}
  .cards
    Card(v-for="item in data.body.articles" :key="item.id" :data="item")
</template>

<script>
import Card from '~/components/Card.vue'

export default {
  name: 'Cards',
  components: {
    Card,
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
.cards {
  --count: 1;
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(var(--count), 1fr);

  @include mq($m) {
    --count: 2;

    gap: 40px 30px;
  }

  @include mq($ms) {
    --count: 3;

    gap: 60px 30px;
  }
}
</style>
