import '../Input.css'


interface TextInputI {
    name: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
  }

const TextInput = ({name, placeholder, onChange, value}: TextInputI) => {
    return (
        <input className="input" type="text" 
        name={name} 
        placeholder={placeholder}
        value={value}
        onChange={onChange}/>
    )
}

TextInput.displayName = "Text input"
export default TextInput;
