import './Label.css'

const Label = ({children}: {children:React.ReactNode}) => {
    return <label className="label">{children}</label>
}

Label.displayName = "Label"
export default Label