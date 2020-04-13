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
  addItem(item: IItem) {
    this.items.push(item)
  }

  @Mutation
  deleteItem(uuid:  string) {
    const results: number = this.items.findIndex(((value, index, obj) => value.id == uuid))
    if (results!= -1)
    {
      this.items.splice(results, 1)
    }
  }


  @Action
  async getItems(): Promise<IItem[]> {
    return this.items
  }
}
