import './IconButton.css'


interface ButtonIconi {
    disabled?: boolean
    onClick: () => void
    children: string
    bgColor?: string
    textColor?: string
}

interface ButtonColorI {
    color: string
    backgroundColor: string
}

const IconButton = ({disabled, onClick, children, bgColor = "black", textColor = "white"  } : ButtonIconi) => {
    const buttonColor :ButtonColorI = {
        color: textColor,
        backgroundColor: bgColor
    }

    return (
        <button onClick={onClick} style={buttonColor} className='icon-button'>{children}</button>
    )
}

IconButton.displayName = "Icon Button"
export default IconButton;