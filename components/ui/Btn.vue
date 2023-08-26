<template lang="pug">
a.btn( v-if="href" :class="computedMods" :href="href" ) {{ text }}
button.btn( v-else :class="computedMods", :type="type") {{ text }}
</template>

<script>
export default {
  name: 'Btn',
  props: {
    mods: String,
    href: String,
    text: String,
    type: {
      type: String,
      default: 'button',
    },
  },
  computed: {
    computedMods() {
      return (
        this.mods &&
        this.mods
          .split(',')
          .map((mod) => `btn--${mod.trim()}`)
          .join(' ')
      )
    },
  },
}
</script>

<style global lang="scss">
.btn {
  --background: #{cl(secondary)};
  --border: 0;
  --color: #{cl(whte)};
  --active-background: #{cl(primary)};
  --active-border: none;
  --active-color: white;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  line-height: 1.44;
  margin: 0;
  padding: 10px 50px;
  color: var(--color);
  font-weight: 400;
  font-size: 18px;
  background-color: var(--background);
  border: var(--border);
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, border 0.3s;
  user-select: none;

  &:hover {
    @include mq-hover() {
      color: var(--active-color);
      background-color: var(--active-background);
      border: var(--active-border);
    }
  }
}

.btn--alt {
  --background: #{cl(primary)};
  --border: 1px solid #{cl(primary)};
  --color: #{cl(whte)};
  --active-background: transparent;
  --active-border: 1px solid #{cl(primary)};
  --active-color: white;
}
</style>
