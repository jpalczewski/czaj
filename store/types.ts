/* istanbul ignore file */
export interface IItemStore {
  items: IItem[]
  getItems : () => Promise<IItem[]>
  addItem: (item: IItem) => void
  deleteItem: (uuid : string) => void
}

export interface IItem {
  id?: String
  name: String
  description?: String
  timeCreated: Date
}
