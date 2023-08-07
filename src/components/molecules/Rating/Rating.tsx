import StarIcon from "../../atoms/Icons/Staricon/StarIcon";

const Rating = ({rateNumber}: { rateNumber: number}) => {
    const icons = [] ;

    for (let index = 1; index < 6; index++) {
        // icons.push(<Icon key={index} name="⭐" size="30px" color="white" />);
        if (index <= (rateNumber / 2)) {
            icons.push(<StarIcon  key={index} />);
        } else {
            icons.push(<StarIcon  key={index}  fill={false}/>);
        }
    }

    return (
        <>
            {icons}
        </>
    )
}

Rating.displayName = "Rate"
export default Rating