<template>
  <section class="section">
    <div class="columns is-mobile">

    </div>
  </section>
</template>

<script lang="ts">
import { getModule } from 'vuex-module-decorators'
import { itemStore } from '../store/index'
import {
  Component,
  Vue
} from "nuxt-property-decorator"
import { IItemStore } from 'store/types'

export default class extends Vue {
  name: string = 'czaj';
  ds: IItemStore = itemStore;


}
</script>
