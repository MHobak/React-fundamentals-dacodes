import '../Input.css'


export interface TextInputI {
    name: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
  }

export const TextInput = ({name, placeholder, onChange, onBlur, value}: TextInputI) => {
    return (
        <input className="input" type="text" 
        name={name} 
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}/>
    )
}

TextInput.displayName = "Text input"
