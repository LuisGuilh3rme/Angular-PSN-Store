export enum tag {
  exclusive = 1,
  game = 2,
  remake = 3,
  remaster = 4
}

export type GameDataInterface = {
  id: number,
  title: string,
  tags: tag[],
  imageUrl: string
}
