import { FetchStatus } from "../../../types/fetch-status";
import { IMovie } from "../../../types/movie";
import { MovieResults } from "../../../types/results";
import { ISearch } from "../../../types/search";

export interface ISimilarMoviesState {
    similarMovie: ISearch<IMovie>| null;
    fetchStatus: FetchStatus | null;
  }