<template>
  <section class="container column">
    <p :key="item.name" class="notification" v-for="item in items">
      <strong>{{item.id}}.{{item.name}}</strong> - <i>{{item.description}}</i>
      <nuxt-link :to="{name: 'print-single', params: {item : item}}">Print</nuxt-link>
    </p>
  </section>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'nuxt-property-decorator'
  import { IItemStore } from '~/store/types'

  @Component
  export default class extends Vue {
    @Prop() ds !: IItemStore

    get items() {
      console.log(this)
      return this.ds ? this.ds.items : []
    }
  }
</script>

<style scoped>

</style>
