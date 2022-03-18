import { FetchStatus } from "../../../types/fetch-status";
import { IMovie } from "../../../types/movie";
import { IMovieDetails } from "../../../types/movie-details";

export interface IMovieDetailsState {
    movieDetails: IMovie | null;
    fetchStatus: FetchStatus | null;
    error: string;
  }