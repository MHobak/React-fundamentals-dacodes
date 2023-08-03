import Label from '../../atoms/Labels/Label/Label';
import {TextInput, TextInputI} from '../../atoms/Inputs/TextInput/TextInput';
import InputErrorMessage from '../../atoms/Text/InputErrorMessage/InputErrorMessage';
import './InputField.css'

interface InputFieldI extends TextInputI {
    label: React.ReactNode;
    error?: string;
  }

const InputField = ({name, label, error, placeholder, onChange, onBlur, value}: InputFieldI) => {
    return (
        <div className='input-field'>
            <Label>{label}</Label>
            <TextInput 
            name={name} 
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}/>
            {error ? <InputErrorMessage>{error}</InputErrorMessage> : null}
        </div>
    )
}

InputField.displayName = "Text input"
export default InputField;
