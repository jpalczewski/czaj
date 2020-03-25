<template>
  <section class="section">
    <div class="columns is-mobile">
      <ItemList :ds="ds"/>
      <ItemAdd :ds="ds"/>
    </div>
  </section>
</template>

<script lang="ts">
import { itemStore } from '../store/index'
import ItemList from  '~/components/ItemList.vue'
import ItemAdd from '~/components/ItemAdd.vue'
import {
  Component,
  Vue
} from "nuxt-property-decorator"
import { IItemStore } from 'store/types'

@Component({
   components: {
     ItemList,
     ItemAdd
   }
})
export default class extends Vue {
  name: string = 'czaj';
  ds: IItemStore = itemStore;


}
</script>
