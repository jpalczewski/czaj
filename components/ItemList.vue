<template>
  <section class="container column">
    <div class="notification" v-for="item in items" :key="item.id">
      <div class="is-left" id="des">
        <strong>{{item.name}}</strong> - <i>{{item.description}}</i>
      </div>

      <div class="is-right" id="buttons">
        <nuxt-link :to="{name: 'print-single', params: {item : item}}">
          <button class="button">
          <b-icon icon="printer"></b-icon>
          </button>
        </nuxt-link>
        <button class="button" @click="removeByUUID(item.id)">
        <b-icon icon="delete"></b-icon>
      </button>
      </div>
    </div>
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

    removeByUUID (val:string) {
      if(this.ds)
      {
        this.ds.deleteItem(val)
      }
      else
      {
        console.error("item store is null");
      }
    }
  }
</script>

<style lang="scss" scoped>
  #buttons {
    text-align: right;
  }
</style>
