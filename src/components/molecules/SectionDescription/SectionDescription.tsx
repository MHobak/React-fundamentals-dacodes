import Title from "../../atoms/Text/Title/Title"
import Subtitle from "../../atoms/Text/Subtitle/SubTitle"

const SectionDescription = ({title, subtitle} : {title: string, subtitle: string}) => {
    return (
        <div>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
        </div>
    )
}

SectionDescription.displayName = "Section description"
export default SectionDescription