import { FetchStatus } from "../../../types/fetch-status";
import { IMovie } from "../../../types/movie";
import { MovieResults } from "../../../types/results";
import { ISearch } from "../../../types/search";

export interface IPlayingMoviesState {
    playingMovie: ISearch<IMovie> | null;
    fetchStatus: FetchStatus | null;
    page: number;
  }