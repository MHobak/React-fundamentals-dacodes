const Image = ({path, description} : {path: string, description: string}) => {
    return (
        <img src={path} alt={description} />
    )
}

Image.displayName = "Image"
export default Image