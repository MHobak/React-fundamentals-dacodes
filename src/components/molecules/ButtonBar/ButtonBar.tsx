import { useEffect, useState } from 'react';
import Button from '../../atoms/Buttons/Button/Button'
import './ButtonBar.css'

export const enum MenuActions {
    NowPlaying = "now_playing",
    Popular = "popular",
    TopRated = "top_rated",
    Upcoming = "upcoming"
}

export const ButtonBar = ({action, selected}:{action?: (route:MenuActions) => void, selected?: MenuActions}) => {
    const [option, setOption] = useState(MenuActions.NowPlaying);

    useEffect(() => {
        if (selected !== undefined) {
            setOption(selected);
        }
    }, []);

    const hanldeSelect = (option:MenuActions) :void  => {
        setOption(option);

        if (action !== undefined) {
            action(option);
        }
    }

    return (
        <div className='button-bar'>
            <Button onClick={() => hanldeSelect(MenuActions.NowPlaying)} disabled={option === MenuActions.NowPlaying}>Now playing</Button>
            <Button onClick={() => hanldeSelect(MenuActions.Popular)} disabled={option === MenuActions.Popular}>Popular</Button>
            <Button onClick={() => hanldeSelect(MenuActions.TopRated)} disabled={option === MenuActions.TopRated}>Top rated</Button>
            <Button onClick={() => hanldeSelect(MenuActions.Upcoming)} disabled={option === MenuActions.Upcoming}>Upcoming</Button>
        </div>
    )
}

ButtonBar.displayName = "Button Bar"