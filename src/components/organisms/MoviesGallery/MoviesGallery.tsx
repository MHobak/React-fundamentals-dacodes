import { MovieCard, MovieI} from "../../molecules/MovieCard/MovieCard"
import './MoviesGallery.css'



const MoviesGallery = ({list}:{list:MovieI[]}) => {
    const elements : JSX.Element[] = [];
    let index = 0;
    list.forEach(movie => {
        elements.push(
            <MovieCard 
                title={movie.title} 
                overview={movie.overview} 
                poster_path={movie.poster_path}
                vote_average={movie.vote_average}
                release_date={movie.release_date}
                key={index} 
            />); 
        index ++;
    });

    return (
        <div className="gallery">
            {elements}
        </div>
    )
}

MoviesGallery.displayName = "Movies Gallery"
export default MoviesGallery