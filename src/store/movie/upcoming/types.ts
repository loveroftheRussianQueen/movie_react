import { FetchStatus } from "../../../types/fetch-status";
import { MovieResults } from "../../../types/results";

export interface IUpcomingMoviesState {
    upcomingMovie: MovieResults | null;
    fetchStatus: FetchStatus | null;
  }