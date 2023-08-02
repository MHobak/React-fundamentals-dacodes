import Image from "../../atoms/Images/Image/Image"
import Rating from "../Rating/Rating"
import './MovieCard.css'


const MovieCard = () => {
    return (
        <>
            <div className="card">
                <div className="card-body overlay">
                    <div className="card-info">
                        <b>Some random title</b>
                        <p>some random description</p>
                        <br></br>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus recusandae odio id eius voluptas culpa accusantium praesentium! Vero iure fugiat ullam accusamus alias dolorum illo iusto laborum, iste, eligendi expedita?</p>
                        <br/>
                        <div className="card-rating">
                            <Rating rateNumber={5}/>
                        </div>
                    </div>
                </div>
                <Image path="/images/power.jpg" description="power"/>
            </div>
        </>
    )
}

MovieCard.displayName = "Image card"
export default MovieCard