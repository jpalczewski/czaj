import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { IItem, IItemStore } from './types'

@Module({
  name: 'items',
  stateFactory: true,
  namespaced: true
})
export default class ItemStore extends VuexModule implements IItemStore {
  items: IItem[] = []

  @Mutation
  async addItem(item: IItem) {
    this.items.push(item)
  }


  @Action
  async getItems(): Promise<IItem[]> {
    return  this.items
  }
}
