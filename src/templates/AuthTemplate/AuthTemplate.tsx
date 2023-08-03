import Title from "../../components/atoms/Text/Title/Title"
import Footer from "../../components/organisms/Footer/Footer"
import Header from "../../components/organisms/Header/Header"
import Subtitle from "../../components/atoms/Text/Subtitle/SubTitle"


const AuthTemplate = ({title, subtitle, children}:{title:string, subtitle:string, children:React.ReactNode}) => {
    return (
        <div className='container'>
        <Header/>
        <div className='container-wrapper'>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            {children}
        </div>
        <Footer/>
      </div>
    )
}

AuthTemplate.displayName = "Auth template"
export default AuthTemplate