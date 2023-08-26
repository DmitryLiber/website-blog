<template lang="pug">
section.container.container--alt.text-block(v-html="data.body")
</template>

<script>
export default {
  name: 'TextBlock',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style global lang="scss">
.text-block {
  blockquote {
    position: relative;
    margin: 0 0 20px;

    @include mq($ms) {
      padding-left: 115px;
      margin: 40px 0;
    }

    &::before {
      content: '';
      background: url('/images/icons/i-blockquote.svg') center center / contain
        no-repeat;
      height: 64px;
      width: 80px;
      position: absolute;
      left: 0;
      top: 0;

      @include mq-max($ms) {
        opacity: 0.2;
      }
    }

    p {
      font-weight: 300;
    }

    footer {
      @include font(14px, 1.42, 400);

      color: #{cl(alt)};
      font-style: normal;
      margin-top: 15px;
      display: block;
    }
  }

  ul {
    margin: 0 0 20px;
    list-style-type: none;
    padding-left: 15px;

    @include mq($m) {
      padding-left: 50px;
    }

    @include mq($ms) {
      margin: 0 0 30px;
    }

    @include mq($l) {
      padding-left: 115px;
    }

    li {
      position: relative;

      &::before {
        content: '';
        position: relative;
        display: inline-block;
        width: 7px;
        height: 7px;
        background-color: black;
        margin-right: 10px;
        transform: translate(0, -30%) scaleY(1) rotate(45deg);
      }

      &:not(:last-child) {
        margin-bottom: 5px;
      }
    }
  }
}
</style>
