import './Button.css'

interface ButtonI {
    type?: "button" | "submit" | "reset"
    disabled?: boolean
    children: React.ReactNode
    onClick?: () => void 
}

const Button = ({children, type = "button", disabled = false, onClick} : ButtonI) => {
    return (
        <button onClick={onClick} disabled={disabled} type={type} className='button'>{children}</button>
    )
}

Button.displayName = "Button"
export default Button;