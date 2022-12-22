export type Movie = {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  likes: number;
  dislikes: number;
};

export type MoviesStoreType = {
  movies: Movie[];
  loader: boolean;
  error: string;
  getMovies: () => void;
};

export type MovieListPropsType = {
  title: string;
  movies: Movie[];
};

export type MovieCoverPropsType = {
  title: string;
  description: string;
};
