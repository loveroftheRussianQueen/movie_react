import { FetchStatus } from "../../../types/fetch-status";
import { IImages } from "../../../types/images";

export interface IMovieImagesState {
    moviePhotos: IImages | null;
    fetchStatus: FetchStatus | null;
  }