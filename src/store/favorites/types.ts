import { Action } from "redux";
import { IMovie } from "../../types/movie";

export interface IFavoriteMovie {
  title: IMovie['title'];
  poster_path: IMovie['poster_path'];
  id: IMovie['id'];
  vote_average: IMovie['vote_average'];
}

export interface IFavoritesState {
  favoriteMovies: IFavoriteMovie[];
}
