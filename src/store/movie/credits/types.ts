import { FetchStatus } from "../../../types/fetch-status";
import { IMovieCredits } from "../../../types/movie-credits";

export interface IMovieCreditsState {
  movieCredits: IMovieCredits | null;
  fetchStatus: FetchStatus | null;
}

