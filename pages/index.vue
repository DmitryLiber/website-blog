<template lang="pug">
component(v-for="(block, index) in blocks", :is="factoryComponents[block.type]", :data="{slug: meta.slug, body: block.data}")
</template>

<script setup>
import { factoryComponents } from '@/assets/js/helpers'
import Cards from '@/components/Cards.vue'

const { data: pageData } = await useFetch(
  'https://devtwit8.ru/api/v1/page/?path=/'
)
const meta = pageData._rawValue.meta
const blocks = pageData._rawValue.body

useHead({
  title: meta.title,
  meta: {
    description: meta.description,
  },
})
</script>

<script>
export default {
  components: {
    Cards,
  },
}
</script>
