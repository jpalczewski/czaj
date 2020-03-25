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

  @Component({
      layout:"printable"
  })
  export default class extends Vue {

    get layout() : string {
      return  "printable"
    }
  }
</script>

<style scoped>

</style>
