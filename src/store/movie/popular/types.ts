import { FetchStatus } from "../../../types/fetch-status";
import { MovieResults } from "../../../types/results";

export interface IPopularMoviesState {
    popularMovie: MovieResults | null;
    fetchStatus: FetchStatus | null;
  }