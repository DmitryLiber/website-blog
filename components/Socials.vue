<template lang="pug">
.socials
  a(href="javascript:void(0)" style='--icon:url("../images/icons/i-facebook.svg");').socials__item
  a(href="javascript:void(0)" style='--icon:url("../images/icons/i-vk.svg");').socials__item
  a(href="javascript:void(0)" style='--icon:url("../images/icons/i-instagram.svg");').socials__item
  a(href="javascript:void(0)" style='--icon:url("../images/icons/i-telegram.svg");').socials__item
</template>

<script>
export default {
  name: 'Socials',
}
</script>

<style global lang="scss">
.socials {
  display: flex;

  &__item {
    @include center;
    --icon: '';

    transition: transform 0.2s;
    will-change: transform;

    &::before {
      @include center;

      content: '';
      background: var(--icon) center center / contain no-repeat;
      width: 30px;
      aspect-ratio: 1;
    }

    &:not(:last-child) {
      margin-right: 20px;
    }

    &:hover {
      @include mq-hover() {
        transform: scale(1.1);
      }
    }
  }
}
</style>
