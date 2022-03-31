<template>
  <div class="codeconduct">
    <div class="container">
      <div class="content" v-html="$t('pages.code-of-conduct')"></div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'CodeConduct',
};
</script>
<style scoped lang="scss">
.codeconduct {
  .content {
    padding: 1.5em 3em;
  }
}
</style>
