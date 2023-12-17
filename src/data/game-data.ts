import { tag } from "src/enums/tag-enum"
import { GameDataInterface } from "src/interfaces/game-data-interface"

export const GameData: GameDataInterface[] = [
  {
    id: 1,
    title: "Call of Duty",
    tags: [tag.game, tag.online],
    imageUrl: "assets/images/games/call_of_duty.webp"
  },
  {
    id: 2,
    title: "Dead Space",
    tags: [tag.game],
    imageUrl: "assets/images/games/dead_space.webp"
  },
  {
    id: 3,
    title: "Alan Wake 2",
    tags: [tag.game],
    imageUrl: "assets/images/games/alan_wake_2.jfif"
  },
  {
    id: 4,
    title: "Metal Gear Collection",
    tags: [tag.game, tag.remaster],
    imageUrl: "assets/images/games/metal_gear.webp"
  },
  {
    id: 5,
    title: "Spider Man 2",
    tags: [tag.game, tag.exclusive],
    imageUrl: "assets/images/games/spider_man_2.webp"
  },
  {
    id: 6,
    title: "Yakuza",
    tags: [tag.game],
    imageUrl: "assets/images/games/yakuza.webp"
  },
  {
    id: 7,
    title: "Resident Evil 4 Remake",
    tags: [tag.game, tag.remake],
    imageUrl: "assets/images/games/resident_evil_4.webp"
  },
  {
    id: 8,
    title: "Resident Evil Village",
    tags: [tag.game],
    imageUrl: "assets/images/games/resident_evil_8.webp"
  },
  {
    id: 9,
    title: "Sonic Superstars",
    tags: [tag.game],
    imageUrl: "assets/images/games/sonic.webp"
  },
  {
    id: 10,
    title: "Gothan Knights",
    tags: [tag.game, tag.online],
    imageUrl: "assets/images/games/gothan_knights.jfif"
  },
  {
    id: 11,
    title: "Fortnite",
    tags: [tag.game, tag.online],
    imageUrl: "assets/images/games/fortnite.webp"
  },
  {
    id: 12,
    title: "God of War Ragnarok",
    tags: [tag.game, tag.exclusive],
    imageUrl: "assets/images/games/gow_ragnarok.jfif"
  },
  {
    id: 13,
    title: "Assassin's Creed Valhalla",
    tags: [tag.game],
    imageUrl: "assets/images/games/ac_valhalla.webp"
  },
  {
    id: 14,
    title: "Destiny 2",
    tags: [tag.game, tag.online],
    imageUrl: "assets/images/games/destiny_2.webp"
  },
]
