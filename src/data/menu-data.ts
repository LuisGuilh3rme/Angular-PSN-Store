import { menuType } from "src/enums/menu-type-enum";
import { MenuDataInterface } from "src/interfaces/menu-data-interface";

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
  },
  {
    id: 4,
    title: "GitHub",
    iconUrl: "assets/github_icon.svg",
    menuType: menuType.support,
    url: "https://github.com/luisguilh3rme"
  },
  {
    id: 5,
    title: "LinkedIn",
    iconUrl: "assets/linkedin_icon.svg",
    menuType: menuType.support,
    url: "https://www.linkedin.com/in/luis-guilherme-francisco-da-silva-70432522b"
  }
]
