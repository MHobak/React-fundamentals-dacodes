import './InputErrorMessage.css'

const InputErrorMessage = ({children}:{children:string}) => {
    return <div className="input-error">{children}</div>
}

export default InputErrorMessage