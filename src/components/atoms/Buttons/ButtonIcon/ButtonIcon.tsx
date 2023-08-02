import './IconButton.css'

interface ButtonColor {
    color: string
    backgroundColor: string
}

const IconButton = ({children, bgColor = "black", textColor = "white"  } : {children: string, bgColor: string, textColor: string}) => {
    const buttonColor :ButtonColor = {
        color: textColor,
        backgroundColor: bgColor
    }

    return (
        <button style={buttonColor} className='icon-button'>{children}</button>
    )
}

IconButton.displayName = "Icon Button"
export default IconButton;