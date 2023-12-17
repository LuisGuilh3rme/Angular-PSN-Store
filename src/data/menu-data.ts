import { MenuDataInterface, menuType } from "src/interfaces/menu-data-interface";

export const MenuData: MenuDataInterface[] = [
  {
    id: 1,
    title: "Ofertas",
    iconUrl: "assets/sales_icon.svg",
    menuType: menuType.games,
    url: "not-found"
  },
  {
    id: 2,
    title: "Catalogo de jogos",
    iconUrl: "assets/game_catalog_icon.svg",
    menuType: menuType.games,
    url: "not-found"
  },
  {
    id: 3,
    title: "PS Plus",
    iconUrl: "assets/ps_plus_icon.svg",
    menuType: menuType.games,
    url: "not-found"
  }
]
