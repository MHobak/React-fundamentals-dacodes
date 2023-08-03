import Title from "../../components/atoms/Text/Title/Title"
import Subtitle from "../../components/atoms/Text/Subtitle/SubTitle"
import MoviesTemplate from "../../templates/MoviesTemplate/MoviesTemplate"
import MoviesGallery from "../../components/organisms/MoviesGallery/MoviesGallery"
import Pagination from "../../components/molecules/Pagination/Pagination"
import ButtonBar from "../../components/molecules/ButtonBar/ButtonBar"

const Movies = () => {
    return (
        <MoviesTemplate>
        <ButtonBar/>
        <Title>Latest</Title>
        <Subtitle>xd</Subtitle>
        <MoviesGallery/>
        <Pagination page={1} total={5}/>
            
        </MoviesTemplate>
    )
}

Movies.displayName = "Movies"
export default Movies