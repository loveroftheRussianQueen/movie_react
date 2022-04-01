import { IVideo, IVideos } from "../../../types/videos";


const Videos = ({videos} :{videos:IVideos | null}) => {


  return (
        <div>{videos?.results.map((video) =>
            <h1>{video.name}</h1>
          )}</div>
  )
}

export default Videos;