<template lang="pug">
footer.footer
  .container.footer__grid
    .footer__top
      Logo
      span.footer__desc.desc Статьи о дизайне и искусстве, которые исследуют творческие вдохновения и актуальные тенденции, раскрывая мир эстетики и креативности
    .footer__bottom
      .footer__email
        span.footer__email-label.desc email
        a(href="mailto:testblogsupport@gmail.com").footer__email-link.link testblogsupport@gmail.com
      Socials
  Subscription
</template>

<script>
import Logo from '@/components/Logo.vue'
import Socials from '@/components/Socials.vue'
import Subscription from '@/components/Subscription.vue'

export default {
  name: 'Footer',
  components: {
    Logo,
    Socials,
    Subscription,
  },
}
</script>

<style global lang="scss">
.footer {
  margin-top: 60px;
  padding-top: 40px;
  border-top: 1px solid cl(alt);

  @include mq($m) {
    margin-top: 80px;
    padding-top: 50px;
  }

  @include mq($l) {
    margin-top: 200px;
  }

  &__grid {
    margin-bottom: 30px;

    @include mq($m) {
      display: grid;
      grid-template-columns: 1fr minmax(0, 315px);
      gap: 20px;
      margin-bottom: 50px;
    }

    @include mq($l) {
      margin-bottom: 70px;
    }
  }

  .logo {
    margin: 0 0 20px;

    @include mq-max($m) {
      margin: 0 auto 20px;
    }
  }

  &__desc {
    display: block;

    @include mq-max($m) {
      margin-bottom: 20px;
    }

    @include mq($m) {
      max-width: 430px;
    }
  }

  &__bottom {
    margin-bottom: 20px;
  }

  &__email {
    margin-bottom: 20px;

    @include mq($m) {
      margin-bottom: 25px;
    }
  }

  &__email-label {
    display: block;
  }
}
</style>
