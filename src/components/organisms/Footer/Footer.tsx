import FooterTitle from "../../atoms/Text/FooterTitle/FooterTitle"
import ImageLogo from "../../atoms/Images/ImageLogo/ImageLogo"
import FooterText from "../../atoms/Text/FooterText/FooterText"
import './Footer.css'

const Footer = () => {
    return (
        <section className="footer-section">
            {/* <img className="footer-bg" src="/footer.svg" alt="image logo"/> */}
            <div className="footer">
                <FooterTitle>We are coding the world of tomorrow_</FooterTitle>
                <div className="text-container">
                    <FooterText>
                        DaCodes es una de las mejores empresas de desarrollo de software en México y LATAM. 
                        Lo que nos separa de los demás es el nivel de involucramiento que tenemos en nuestros 
                        proyectos y la pasión que tenemos por desarrollar productos digitales de calidad mundial. 
                        Somos un equipo de 220+ dacoders especializados en la planeación, diseño, desarrollo, 
                        implementación e innovación continua de productos digitales disruptivos.
                    </FooterText>
                </div>
                <div className="footer-logos">
                    <ImageLogo path="/svg/logo3.svg" height={"70px"}/>
                    <ImageLogo path="/svg/logo4.svg" height={"70px"}/>
                    <ImageLogo path="/svg/logo1.svg" height={"70px"}/>
                    <ImageLogo path="/svg/logo2.svg" height={"70px"}/>
                </div>
            </div>
        </section>
    )
}

Footer.displayName = "Footer"
export default Footer