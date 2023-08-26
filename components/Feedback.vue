<template lang="pug">
section.feedback
  .container
    form.feedback__grid.form
      h2.form__title Стань участником проекта
      .form__fields
        Field(text="Имя" name="name")
        Field(type="tel" text="Телефон" name="phone")
        Field(type="email" text="Email" name="email")
      Btn(type="submit" text="Присоединиться" mods="alt")
</template>

<script>
import Btn from '@/components/ui/Btn'
import Field from '@/components/ui/Field'

export default {
  name: 'Feedback',
  components: {
    Btn,
    Field,
  },
}
</script>

<style global lang="scss">
.feedback {
  &__grid {
    padding: 30px $pad-s;

    @include mq($m) {
      padding: 30px $pad-m;
    }

    @include mq($ms) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-items: start;
      align-items: start;
      gap: 0 60px;
    }

    @include mq($l) {
      grid-template-columns: 595px 1fr;
      padding: 60px;
    }

    &::before {
      @include mq($ms) {
        content: '';
        background: url('/images/feedback.jpg') center center / contain
          no-repeat;
        width: 100%;
        aspect-ratio: 595 / 326;
        display: block;
        grid-row: 1/4;
      }
    }
  }

  .field {
    @include mq($ms) {
      max-width: 350px;
    }
  }
}
</style>
