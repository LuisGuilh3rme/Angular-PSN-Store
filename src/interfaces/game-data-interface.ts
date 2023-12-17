import { tag } from "src/enums/tag-enum"

export type GameDataInterface = {
  id: number,
  title: string,
  tags: tag[],
  imageUrl: string
}
