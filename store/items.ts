import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { IItem, IItemStore } from '~/store/types'

@Module({
  name: 'items',
  stateFactory: true,
  namespaced: true
})
export default class extends VuexModule implements IItemStore {
  items: IItem[] = []

  @Mutation
  addItem(item: IItem) {
    this.items.push(item)
  }

  @Action
  async getItems(): Promise<IItem[]> {
    return []
  }
}
