import Image from "../../atoms/Images/Image/Image"
import Rating from "../Rating/Rating"
import './MovieCard.css'

export interface MovieI {
    title: string
    overview: string
    poster_path: string
    vote_average: number
    release_date: string
}

export const MovieCard = ({title, overview, poster_path, vote_average, release_date}:MovieI) => {
    return (
        <>
            <div className="card">
                <div className="card-body overlay">
                    <div className="card-info">
                        <b>{title}</b>
                        <p>{release_date}</p>
                        <br></br>
                        <p className="description-text">{overview}</p>
                        <br/>
                        <div className="card-rating">
                            <Rating rateNumber={vote_average}/>
                        </div>
                    </div>
                </div>
                <Image path={poster_path} description={title}/>
            </div>
        </>
    )
}

MovieCard.displayName = "Image card"