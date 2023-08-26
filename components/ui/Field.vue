<template lang="pug">
input.field(:type="type" :placeholder="text" :name="name")
</template>

<script>
export default {
  name: 'Field',
  props: {
    type: {
      type: String,
      default: 'text',
    },
    text: String,
    name: String,
  },
}
</script>

<style global lang="scss">
.field {
  border-bottom: 1px solid cl(alt);
  outline: none;

  &[type='text'],
  &[type='search'],
  &[type='date'],
  &[type='tel'],
  &[type='email'],
  &[type='password'],
  &[type='number'] {
    color: cl(alt);
    border: 0;
    border-bottom: 1px solid cl(alt);
    background-color: transparent;
    font-size: 18px;
    line-height: 1.44;
    width: 100%;
    padding: 0 8px;
    transition: border-color $time;

    &:focus {
      border-bottom: 1px solid cl(primary);
    }

    &:not(:placeholder-shown) {
      border-bottom: 1px solid cl(whte);
      color: cl(whte);
    }
  }
}
</style>
