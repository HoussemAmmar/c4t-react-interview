export type Movie = {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  likes: number;
  dislikes: number;
};

export type ThemeStoreType = {
  movies: Movie[];
  loader: boolean;
  error: string;
};
