import CheckBox from "../../atoms/Inputs/CheckBox/CheckBox"

const TermsCheckbox = ({name}:{name:string}) => {
    return (
        <div>
            <CheckBox name={name}/>
            <span><i>Aceptar terminos y condiciones</i></span>
        </div>
    )
}

TermsCheckbox.displayName = "Terms Checkbox"
export default TermsCheckbox