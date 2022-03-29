import { IMovie } from '../../../types/movie';
import './MovieTable.scss';

const MovieTable = ({movie} : {movie:IMovie}) => {

  return (
    <div>
    <table className="detail_table">
        <tbody>
        <tr className="details_table__row">
            <td className="details_table__item">
                Released
            </td>
            <td className="details_table__item data">
                {movie.release_date}
            </td>
        </tr>
        <tr className="details_table__row">
            <td className="details_table__item">
                Runtime
            </td>
            <td className="details_table__item data"> 
                {movie.runtime}
            </td>
        </tr>
        <tr className="details_table__row">
            <td className="details_table__item">
                    Budget
            </td>
            <td className="details_table__item data">
                    {`$` + movie.budget.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
            </td>
        </tr>
        <tr className="details_table__row">
            <td className="details_table__item">
                Revenue
            </td>
            <td className="details_table__item data">
                {`$` + movie.revenue.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
            </td>
        </tr>
        <tr className="details_table__row">
            <td className="details_table__item">
                Genres
            </td>
            <td className="details_table__item data">
            {movie.genres && movie.genres.slice(0, 5).map((genre, i) =>
                    <span>{genre.name + ", "}</span>
                    )}
            </td>
        </tr>
        <tr className="details_table__row">
            <td className="details_table__item">
                Status
            </td>
            <td className="details_table__item data">
                {movie.status}
            </td>
        </tr>
        <tr className="details_table__row">
            <td className="details_table__item">
                Language
            </td>
            <td className="details_table__item data">
                {movie.original_language}
            </td>
        </tr>
        <tr className="details_table__row">
            <td className="details_table__item ">
                Production
            </td>
            <td className="details_table__item data">
                {movie.production_companies && 
                movie.production_companies.slice(0, 2).map((company, i) =>
                    <span>{company.name + ", "}</span>
                    )}
            </td>
        </tr>
        </tbody>
        </table>
    </div>
  )
}

export default MovieTable