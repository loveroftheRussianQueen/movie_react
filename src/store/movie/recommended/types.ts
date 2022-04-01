import { FetchStatus } from "../../../types/fetch-status";
import { IMovie } from "../../../types/movie";
import { MovieResults } from "../../../types/results";
import { ISearch } from "../../../types/search";

export interface IRecommendedMoviesState {
    recommendedMovie: MovieResults | null;
    fetchStatus: FetchStatus | null;
  }