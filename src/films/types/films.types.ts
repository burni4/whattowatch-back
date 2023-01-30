export type FilmOutputModelType = {
  id: string;
  title: string;
  year: number;
  runtime: number;
  genres: string[];
  director: string;
  actors: string[];
  description: string;
  shortDescription: string;
  posterUrl: string;
};

export type CreateFilmInputModelType = {
  title: string;
  year: number;
  runtime: number;
  genres: string[];
  director: string;
  actors: string[];
  description: string;
  shortDescription: string;
  posterUrl: string;
};

export type UpdateFilmInputModelType = {
  title: string;
  year: number;
  runtime: number;
  genres: string[];
  director: string;
  actors: string[];
  description: string;
  shortDescription: string;
  posterUrl: string;
};
