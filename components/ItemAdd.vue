<template>
  <section>
    <label for="name">Nazwa</label>
    <input id="name" type="text" v-model="name"/>
    <label for="descr">Opis</label>
    <input id="descr" type="text" v-model="description"/>
    <button @click="add"  >dodaj</button>
  </section>
</template>

<script lang="ts">
  import {
    Component,
    Prop,
    Vue
  } from "nuxt-property-decorator"
  import { IItem, IItemStore } from '../store/types'

  @Component
  export default class extends Vue {
    @Prop() ds !: IItemStore;

    name : String = "";
    description : String = "";

    get item(): IItem {
      return {
        id: '1', timeCreated: new Date,
        name: this.name,
        description: this.description
      }
    }

     add() {
      const item = this.item;
      this.ds.addItem(item);
      this.name = "";
      this.description = "";
    }


  }
</script>

<style scoped>

</style>
