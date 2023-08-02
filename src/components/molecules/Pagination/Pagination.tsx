import IconButton from "../../atoms/Buttons/ButtonIcon/ButtonIcon"
import './Pagination.css'

const Pagination = ({page = 0, total = 0} : {page: number, total: number}) => {
    return (
        <div className="pagination-container">
            <div className="pagination-bar">
                <IconButton bgColor="#5141EA">{"<"}</IconButton>
                <p>{`${page}/${total}`}</p>
                <IconButton bgColor="#5141EA">{">"}</IconButton>
            </div>
        </div>       
    )
}

Pagination.displaName = "Pagination"
export default Pagination