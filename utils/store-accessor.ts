import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import ItemStore  from '~/store/items'
import { IItemStore } from '~/store/types'

let itemStore: IItemStore

function initialiseStores(store: Store<any>): void {
  itemStore = getModule(ItemStore, store)
}

export { initialiseStores, itemStore }
