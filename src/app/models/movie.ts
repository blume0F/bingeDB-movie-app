export interface MovieDTO {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface MovieVideoDTO {
  id: number;
  results: MovieVideo[];
}

export interface MovieImages {
  backdrops: {
    file_path: string;
  }[];
}

export interface MovieVideo {
  site: string;
  key: string;
}

export interface MovieCredits {
  cast: {
    name: string;
    profile_path: string;
  }[];
}

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  revenue: number;
  video: boolean;
  vote_average: number;
  status: string;
  runtime: number;
  vote_count: number;
  genres: Genre[];
}

export interface GenresDTO {
  genres: Genre[];
}

export interface Genre {
  name: string;
  id: string;
}
