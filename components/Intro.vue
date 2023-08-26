<template lang="pug">
section.intro
  .container.intro__grid
    h1.intro__title {{ data.body.title }}
    ul.intro__info
      li.desc.intro__info-item(style='--icon:url("/images/icons/i-clock.svg");') {{ data.body.reading_time }} мин время чтения
      li.desc.intro__info-item(style='--icon:url("/images/icons/i-eye.svg");') {{ data.body.views_count }} прочитали статью
    .intro__text
      p {{ data.body.short_description }}
    picture.intro__img
      img(:src="data.body.image", :alt="data.body.title", width="541" height="580")
</template>

<script>
export default {
  name: 'Intro',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.intro {
  &__grid {
    @include mq-max($l) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    @include mq($l) {
      display: grid;
      grid-template-columns: 540px 1fr;
      gap: 0 30px;
    }
  }

  &__title {
    @include mq-max($l) {
      order: 1;
    }

    @include mq($l) {
      margin-top: 70px;
    }
  }

  &__info {
    @include reset-list();

    margin-bottom: 20px;

    @include mq-max($l) {
      order: 2;
    }

    @include mq($l) {
      margin-bottom: 50px;
    }
  }

  &__info-item {
    --icon: '';

    display: flex;
    align-items: center;

    &::before {
      content: '';
      display: block;
      background: var(--icon) center center / contain no-repeat;
      width: 16px;
      aspect-ratio: 1;
      margin-right: 8px;
    }

    &:not(:last-child) {
      margin-bottom: 5px;
    }
  }

  &__text {
    margin-bottom: 20px;

    @include mq-max($l) {
      order: 4;
    }
  }

  &__img {
    width: 100%;
    height: 280px;
    border-radius: 0 100px 0 0;

    @include mq($m) {
      height: 350px;
    }

    @include mq($ms) {
      height: 400px;
    }

    @include mq-max($l) {
      order: 3;
      margin-bottom: 20px;
    }

    @include mq($l) {
      grid-row: 1 / 5;
      grid-column: 1;
      height: 580px;
      border-radius: 0 200px 0 0;
    }
  }
}
</style>
