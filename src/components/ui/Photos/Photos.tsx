import { IImages } from '../../../types/images';
import './Photos.scss';

const Photos = ({photos} :{photos:IImages | null}) => {

  const small_img = 'http://image.tmdb.org/t/p/w500/';

  return (
    <div className="images">{photos?.backdrops.map((path) =>
            <img src={small_img + path.file_path}/>
        )}</div>
  )
}

export default Photos;