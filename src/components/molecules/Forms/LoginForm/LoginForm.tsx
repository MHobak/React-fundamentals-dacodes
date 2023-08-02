import TextInput from '../../../atoms/Inputs/TextInput/TextInput'
import CheckBox from '../../../atoms/Inputs/CheckBox/CheckBox'
import Button from '../../../atoms/Buttons/Button/Button'
import '../Form.css'

const LoginForm = () => {
    return (
        <form className='form'>
            <TextInput 
                name='email' 
                placeholder='Email' 
                label='Correo electrónico de Dacodes'
                onChange={() => console.log("hola")}
                value=''
            />
            <TextInput 
                name='password' 
                placeholder='Password' 
                label='Contraseña'
                onChange={() => console.log("hola")}
                value=''
            />
            <CheckBox label='He leido y acepto los terminos y condiciones' />
            <div className='submit-button'>
                <Button>Crear cuenta</Button>
            </div>
        </form>
    )
}

LoginForm.displayName = "Login Form"
export default LoginForm;