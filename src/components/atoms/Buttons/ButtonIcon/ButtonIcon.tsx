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

const IconButton = ({disabled = false, onClick, children, bgColor = "black", textColor = "white"  } : ButtonIconi) => {
    const buttonColor :ButtonColorI = {
        color: textColor,
        backgroundColor: bgColor
    }

    return (
        <button disabled={disabled} onClick={onClick} style={buttonColor} className='icon-button'>{children}</button>
    )
}

IconButton.displayName = "Icon Button"
export default IconButton;