export enum tag {
  exclusive = "exclusive",
  game = "game",
  remake = "remake",
  remaster = "remaster",
  online = "online"
}

export type GameDataInterface = {
  id: number,
  title: string,
  tags: tag[],
  imageUrl: string
}
