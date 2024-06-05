export interface CardType {
  id: string
  content: string
  hash: string
  nameCard: string
}

export interface ColumnType {
  id: string
  name: string
  icon: string
  status: string
  cards: CardType[]
}
