<template>
<section class="container">
  <p v-for="item in items" :key="item.name" class="notification" >
    <strong>{{item.name}}</strong> - <i>{{item.description}}</i> <nuxt-link :to="printUrl(item.id)"> test</nuxt-link>
  </p>
</section>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'nuxt-property-decorator'

  import { State } from "vuex-class"
  import { IItemStore } from '~/store/types'
  @Component
  export default class extends Vue {
    @Prop() ds !: IItemStore;

    get items() {
        console.log(this)
       return this.ds ? this.ds.items : []
    }

     printUrl(str : string) : string {
        return "/print/" + str;
    }

  }
</script>

<style scoped>

</style>
