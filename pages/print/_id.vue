<template>
  <section>
     {{this.$route.params.id }}
  </section>
</template>

<script lang="ts">
  import {
    Component,
    Vue
  } from "nuxt-property-decorator"

  @Component
  export default class extends Vue {

  }
</script>

<style scoped>

</style>
