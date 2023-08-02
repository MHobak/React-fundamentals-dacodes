import Button from '../../atoms/Buttons/Button/Button'
import './ButtonBar.css'

const ButtonBar = () => {
    return (
        <div className='button-bar'>
            <Button>Latest</Button>
            <Button>Now playing</Button>
            <Button>Popular</Button>
            <Button>Top rated</Button>
            <Button>Upcoming</Button>
        </div>
    )
}

ButtonBar.displayName = "Button Bar"
export default ButtonBar