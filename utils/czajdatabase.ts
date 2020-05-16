import Dexie from 'dexie';
import { IItem} from '~/store/types'

export class CzajDatabase extends  Dexie {
  items: Dexie.Table<IItem, String>

  constructor() {
    super("CzajDatabase");

    this.version(1).stores({
       items: '$$id, name, description, parent, timeCreated'
      }
    )
    this.items = this.table("items")
  }
}
