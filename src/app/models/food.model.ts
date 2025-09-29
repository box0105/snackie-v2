export interface Food {
  id: number;
  userId: number;
  name: string;
  img: string;
  quote: string;
  isFav: boolean;
  isPicked: boolean;
  hydrationRating: number;
  satietyRating: number;
  priceRating: number;
}
