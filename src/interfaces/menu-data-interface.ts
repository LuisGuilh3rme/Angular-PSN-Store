export enum menuType {
  games = "games",
  support = "support"
}

export type MenuDataInterface = {
  id: number,
  title: string,
  iconUrl: string,
  menuType: menuType,
  url: string
}
