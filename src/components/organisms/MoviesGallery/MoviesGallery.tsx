import MovieCard from "../../molecules/MovieCard/MovieCard"
import './MoviesGallery.css'

const MoviesGallery = () => {
    const num = 15;
    const elements = [];

    for (let index = 0; index < num; index++) {
        elements.push(<MovieCard key={index} />);
    }

    return (
        <div className="gallery">
            {elements}
        </div>
    )
}

MoviesGallery.displayName = "Movies Gallery"
export default MoviesGallery