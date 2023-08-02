const ImageLogo = ({path, height}: {path: string, height: string | number}) => {
    return <img src={path} alt="Logo" height={height} width={"auto"}  />
}

ImageLogo.displayName = "Image logo";
export default ImageLogo;