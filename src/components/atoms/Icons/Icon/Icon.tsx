const Icon = ({ name, size, color }: { name: string, size: string, color: string}) => {
    const iconStyle = {
      fontSize: size,
      color: color
    }
  
    return (
      <span className="icon" style={iconStyle}>
        {name}
      </span>
    )
}

Icon.displayName = "Icon"
export default Icon