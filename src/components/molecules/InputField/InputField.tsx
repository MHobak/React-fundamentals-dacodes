import Label from '../../atoms/Labels/Label/Label';
import TextInput from '../../atoms/Inputs/TextInput/TextInput';
import './InputField.css'

interface InputFieldI {
    label: React.ReactNode;
    name: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
  }

const InputField = ({name, label, placeholder, onChange, value}: InputFieldI) => {
    return (
        <div className='input-field'>
            <Label>{label}</Label>
            <TextInput 
            name={name} 
            placeholder={placeholder}
            value={value}
            onChange={onChange}/>
        </div>
    )
}

InputField.displayName = "Text input"
export default InputField;
