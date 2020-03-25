import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import ItemStore  from '~/store/items'

let itemStore: ItemStore

function initialiseStores(store: Store<any>): void {
  itemStore = getModule(ItemStore, store)
}

export { initialiseStores, itemStore }
