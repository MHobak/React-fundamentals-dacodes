import ImageLogo from '../../atoms/Images/ImageLogo/ImageLogo'
import Icon from '../../atoms/Icons/Icon/Icon'
import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <ImageLogo path="/images/DacodesLogo.png" height={50}/>
            <Icon name="🙂" size="18px" color="white"/>
        </header>
    )
}

Header.displayName = "Header"
export default Header;