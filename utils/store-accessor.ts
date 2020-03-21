import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Item from '~/store/Item'

let itemStore: Item

function initialiseStores(store: Store<any>): void {
  itemStore = getModule(Item, store)
}

export { initialiseStores, itemStore }
