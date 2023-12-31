import IconButton from "../../atoms/Buttons/ButtonIcon/ButtonIcon"
import './Pagination.css'

interface PaginationI {
    page: number
    total: number
    onPrevious: () => void
    onNext: () => void
}

const Pagination = ({page, total, onPrevious, onNext} : PaginationI) => {
    return (
        <div className="pagination-container">
            <div className="pagination-bar">
                <IconButton disabled={page <= 1} onClick={onPrevious} bgColor="#5141EA">{"<"}</IconButton>
                <p>{`${page}/${total}`}</p>
                <IconButton disabled={page >= total} onClick={onNext} bgColor="#5141EA">{">"}</IconButton>
            </div>
        </div>       
    )
}

Pagination.displaName = "Pagination"
export default Pagination