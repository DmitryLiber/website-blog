<template lang="pug">
component(v-for="(block, index) in blocks", :is="factoryComponents[block.type]", :data="{slug: meta.slug, body: block.data}")
</template>

<script setup>
import { factoryComponents } from '@/assets/js/helpers'
import { useRoute } from 'vue-router'

import TextBlock from '@/components/TextBlock.vue'
import ImageBlock from '@/components/ImageBlock.vue'
import Slider from '@/components/Slider.vue'
import Subscription from '@/components/Subscription.vue'
import Feedback from '@/components/Feedback.vue'
import Cards from '@/components/Cards.vue'
import Intro from '@/components/Intro.vue'

const route = useRoute()
const slug = route.params.slug
const url = `http://devtwit8.ru/api/v1/page/?path=/article-${slug[0]}`
const { data: pageData } = await useFetch(url)

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
    TextBlock,
    ImageBlock,
    Slider,
    Subscription,
    Feedback,
    Cards,
    Intro,
  },
}
</script>
