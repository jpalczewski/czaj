import { IItem } from '~/store/types'
import  { CzajDatabase} from '~/utils/czajdatabase'
export class Item implements IItem {
  id: String
  name: String
  timeCreated: Date
  description?: String
  parent?: Item


  constructor(id: String, name: String, timeCreated: Date, description?: String, parent?: Item) {
    this.id = id
    this.name = name
    this.timeCreated = timeCreated
    this.description = description
    this.parent = parent
  }

  // save() {
  //   return db.transaction('rw', db.items, async () => {
  //     this.id = await db.items.put(this);
  //   })
  // }
}

var db =  new CzajDatabase();
db.items.mapToClass(Item)
