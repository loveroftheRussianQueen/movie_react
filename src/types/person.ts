import { IMovie } from './movie';
import { IShow } from './show';

export interface IPerson {
  adult: boolean;
  id: number;
  known_for?: Array<IMovie | IShow>;
  name: string;
  popularity: number;
  profile_path: string;
}