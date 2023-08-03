import './Button.css'

interface ButtonI {
    type?: "button" | "submit" | "reset"
    disabled?: boolean
    children: React.ReactNode
}

const Button = ({children, type = "button", disabled = false} : ButtonI) => {
    return (
        <button disabled={disabled} type={type} className='button'>{children}</button>
    )
}

Button.displayName = "Button"
export default Button;