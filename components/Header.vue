<template lang="pug">
header.header
  .container
    Logo
</template>

<script>
import Logo from '@/components/Logo.vue'

export default {
  name: 'Header',
  components: {
    Logo,
  },
}
</script>

<style global lang="scss">
.header {
  padding: 15px 0;
  margin-bottom: 10px;

  .logo {
    margin: 0 auto;
  }

  @include mq($m) {
    padding: 25px 0;
    margin-bottom: 30px;
  }
}
</style>
