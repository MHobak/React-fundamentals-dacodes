const StarIcon = ({fill = true}:{fill?:boolean}) => {
    if (fill) {
        return <img src="/svg/star.svg" alt="star icon" />
    }

    return  <img src="/svg/star1.svg" alt="star icon" />
}

export default StarIcon