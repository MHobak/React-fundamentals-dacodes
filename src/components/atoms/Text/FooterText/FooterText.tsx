import './FooterText.css'

const FooterText = ({children}:{children:string}) => <p className="footer-text">{children}</p>

FooterText.displayName = "Footer text"
export default FooterText