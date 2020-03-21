import {itemStore} from  '~/utils/store-accessor'


describe('itemStore', () => {
  it('has to get store instance', async  (done) => {
    expect(itemStore).toBeInstanceOf(Object)
    done()
  })
})
