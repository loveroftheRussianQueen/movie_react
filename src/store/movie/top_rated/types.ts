import { FetchStatus } from "../../../types/fetch-status";
import { MovieResults } from "../../../types/results";

export interface ITopMoviesState {
    topMovie: MovieResults | null;
    fetchStatus: FetchStatus | null;
  }