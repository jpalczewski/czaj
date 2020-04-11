<template>
  <section class="container column">

    <b-field label="Name">
      <b-input v-model="name"></b-input>
    </b-field>
    <b-field label="Description">
      <b-input v-model="description"></b-input>
    </b-field>
    <b-button @click="add">Add</b-button>
  </section>
</template>

<script lang="ts">
  import {
    Component,
    Prop,
    Vue
  } from "nuxt-property-decorator"
  import { IItem, IItemStore } from '~/store/types'
  import { uniqueId } from 'lodash'

  @Component
  export default class extends Vue {
    @Prop() ds !: IItemStore;

    name : String = "";
    description : String = "";

    get item(): IItem {
      return {
        id:  this.$uuid.v4() , timeCreated: new Date,
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
