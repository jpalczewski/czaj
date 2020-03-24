import { IItem } from '~/store/types'
import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import ItemStore from '../store/items'
import { getModule } from 'vuex-module-decorators'

const Vue = createLocalVue()
Vue.use(Vuex)

const factory = () =>{
  const store = new Vuex.Store({
    modules: {
      items: ItemStore
    }
  })
  return getModule(ItemStore, store)
}
describe('ItemStore', () => {
  it('addItem', async  (done) => {
    const service = factory()
    const item: IItem = {
      description: 'Test', id: 'Test', name: 'asd', timeCreated: new Date
    }
    service.addItem(item)
    expect(service.items[0]).toBe(item)
    done()
  })
})
