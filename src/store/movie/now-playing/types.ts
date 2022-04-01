import { FetchStatus } from "../../../types/fetch-status";
import { MovieResults } from "../../../types/results";

export interface IPlayingMoviesState {
    playingMovie: MovieResults | null;
    fetchStatus: FetchStatus | null;
  }