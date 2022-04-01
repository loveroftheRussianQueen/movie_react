import { FetchStatus } from "../../../types/fetch-status";
import { IVideo, IVideos } from "../../../types/videos";

export interface IMovieVideosState {
  movieVideos: IVideos | null;
  fetchStatus: FetchStatus | null;
}