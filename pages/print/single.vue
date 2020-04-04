<template>
  <div id="sheet">
    <!--    <p class="title"></p>-->
    <p class="title" v-bind:class="{'is-size-6': isSmall}">{{this.$route.params.item.name}}</p>
    <p class="subtitle" v-bind:class="{'is-size-6':  isSmall}">{{this.$route.params.item.description}}</p>
    <div class="field" id="back" >
      <label for="setSmall">Force smaller size</label>
      <input id="setSmall" type="checkbox" v-model="small">
      <nuxt-link  to="/">Back</nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator'

  @Component
  export default class extends Vue {

     small: Boolean = false

    get layout(): string {
      return 'printable'
    }

    get isSmall() {
      return this.small
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
