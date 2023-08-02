import './Button.css'

const Button = ({children} : {children: React.ReactNode}) => {
    return (
        <button className='button'>{children}</button>
    )
}

Button.displayName = "Button"
export default Button;