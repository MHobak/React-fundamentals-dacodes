import Icon from "../../atoms/Icons/Icon/Icon";

const Rating = ({rateNumber}: { rateNumber: number}) => {
    const icons = [] ;

    for (let index = 0; index < rateNumber; index++) {
        icons.push(<Icon key={index} name="⭐" size="30px" color="white" />);
    }

    return (
        <>
            {icons}
        </>
    )
}

Rating.displayName = "Rate"
export default Rating