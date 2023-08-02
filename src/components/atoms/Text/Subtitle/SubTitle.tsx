import './Subtitle.css'

const Subtitle = ({children}:{children:string}) => <h3 className="subtitle">{children}</h3>

Subtitle.displayName = "Sub Title"
export default Subtitle