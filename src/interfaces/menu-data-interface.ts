import { menuType } from "src/enums/menu-type-enum"

export type MenuDataInterface = {
  id: number,
  title: string,
  iconUrl: string,
  menuType: menuType,
  url: string
}
