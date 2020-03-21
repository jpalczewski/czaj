import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

@Module({
  name: 'items',
  stateFactory: true,
  namespaced: true,
})

export  default  class Item extends  VuexModule {
  name = 'Item name'
  description = 'Item description'

  @Mutation
  setName(str: string) {
    this.name = str;
  }
}
