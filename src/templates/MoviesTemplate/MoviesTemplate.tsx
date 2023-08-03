import Footer from "../../components/organisms/Footer/Footer"
import Header from "../../components/organisms/Header/Header"


const MoviesTemplate = ({children}:{children:React.ReactNode}) => {
    return (
        <div className='container'>
        <Header/>
        <div className='container-wrapper'>
            {children}
        </div>
        <Footer/>
      </div>
    )
}

MoviesTemplate.displayName = "Movies Template"
export default MoviesTemplate