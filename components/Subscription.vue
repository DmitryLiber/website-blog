<template lang="pug">
form.subscription
  .container
    .form.subscription__grid
      h3.form__title.subscription__title Подпишись на рассылку
      Field(type="email" text="Email" name="email")
      Btn(text="Подписаться" type="submit" mods="alt")
</template>

<script>
import Btn from '@/components/ui/Btn'
import Field from '@/components/ui/Field'

export default {
  name: 'Subscription',
  components: {
    Btn,
    Field,
  },
}
</script>

<style global lang="scss">
.subscription {
  &__title {
    @include mq($ms) {
      margin: 0;
    }

    @include mq($ms) {
      display: flex;
      align-items: center;
    }
  }

  &__grid {
    padding: 30px $pad-s;

    @include mq($m) {
      padding: 30px;
    }

    @include mq($ms) {
      display: grid;
      grid-template-columns: 1fr minmax(0, 300px) 220px;
      gap: 20px;
    }

    @include mq($l) {
      grid-template-columns: 1fr minmax(0, 350px) 220px;
      gap: 40px;
    }
  }

  .field {
    @include mq-max($ms) {
      margin-bottom: 30px;
    }
  }
}
</style>
