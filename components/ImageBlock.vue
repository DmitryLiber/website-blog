<template lang="pug">
section.container.image-block
  .image-block__img
    img(:src="data.body.src", :alt="data.body.caption" width="1340" height="550")
  .image-block__desc.desc(v-if="data.body.caption !== ''") {{ data.body.caption }}
</template>

<script>
export default {
  name: 'ImageBlock',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.image-block {
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

    @include mq($l) {
      height: 550px;
      border-radius: 0 200px 0 0;
    }
  }

  &__desc {
    text-align: right;
    margin-top: 15px;
  }
}
</style>
