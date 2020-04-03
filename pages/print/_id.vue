<template>
  <div id="sheet">
    <!--    <p class="title">{{this.$route.params.id }}</p>-->
    <p class="title">Disgustingly long sample text</p>
    <p class="subtitle">Awkwardly bottom text</p>
    <a id="back">Back</a>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator'

  @Component
  export default class extends Vue {

    get layout(): string {
      return 'printable'
    }
  }
</script>

<style lang="scss" scoped>
  @media print {
    #back {
      display: none;
    }
    @page {
      size: 29mm 62mm;
      margin: 0 0 0 0;
    }
    html {
      width: 62mm;
      margin: 0;
      padding: 0;
      max-width: 62mm;
      min-width: 62mm;
    }
  }
</style>
