import './Title.css'

const Title = ({children}:{children:string}) => <h1 className="title">{children}</h1>

Title.displayName = "Title"
export default Title