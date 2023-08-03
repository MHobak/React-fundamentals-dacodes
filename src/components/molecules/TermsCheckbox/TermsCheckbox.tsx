import { CheckboxI, CheckBox } from "../../atoms/Inputs/CheckBox/CheckBox"
import InputErrorMessage from "../../atoms/Text/InputErrorMessage/InputErrorMessage"

interface TermsCheckboxI extends CheckboxI {
    error?: string
}

const TermsCheckbox = ({name, onChange, onBlur, checked, error}: TermsCheckboxI) => {
    return (
        <label>
            <CheckBox onChange={onChange} onBlur={onBlur} checked={checked} name={name}/>
            <span><i>Aceptar terminos y condiciones</i></span>
            {error ? <InputErrorMessage>{error}</InputErrorMessage> : null}
        </label>
    )
}

TermsCheckbox.displayName = "Terms Checkbox"
export default TermsCheckbox