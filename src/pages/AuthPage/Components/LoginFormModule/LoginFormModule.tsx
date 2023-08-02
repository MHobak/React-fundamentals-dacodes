import InputField from "../../../../components/molecules/InputField/InputField"
import TermsCheckbox from "../../../../components/molecules/TermsCheckbox/TermsCheckbox"
import Button from "../../../../components/atoms/Buttons/Button/Button"
import './LoginFormModule.css'

const LoginFormModule = () => {
    return (
        <form className='form'>
            <InputField
                name=''
                label=''
                placeholder=''
                onChange={() => console.log("input")}
                value=""
            />
            <InputField
                name=''
                label=''
                placeholder=''
                onChange={() => console.log("input")}
                value=""
            />
            <TermsCheckbox name="loginTerms"/>
            <div className='submit-button'>
                <Button>Crear cuenta</Button>
            </div>
        </form>
    )
}

LoginFormModule.displayName = "Login form module"
export default LoginFormModule