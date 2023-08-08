import Spinner from "../../atoms/Spinner/Spinner";
import Title from "../../atoms/Text/Title/Title";
import './Loading.css'

const Loading = () => {
    return (
        <div className="loader-container">
            <Spinner/>
            <Title>Cargando...</Title>
        </div>
    )
}

export default Loading;