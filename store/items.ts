import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { IItem, IItemStore } from './types'
import { CzajDatabase } from '~/utils/czajdatabase'

@Module({
  name: 'items',
  stateFactory: true,
  namespaced: true
})
export default class ItemStore extends VuexModule implements IItemStore {
  items: IItem[] = []
  database: CzajDatabase = new  CzajDatabase()

  @Mutation
  addItem(item: IItem) {
    //this.items.push(item)
    this.database.items.add(item)
  }

  @Mutation
  deleteItem(uuid:  string) {
    this.database.items.delete(uuid)
    // const results: number = this.items.findIndex(((value, index, obj) => value.id == uuid))
    // if (results!= -1)
    // {
    //   this.items.splice(results, 1)
    // }
  }


  @Action
  async getItems(): Promise<IItem[]> {
    return this.database.items.toArray()
  }
}
