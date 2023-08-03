import AuthTemplate from "../../templates/AuthTemplate/AuthTemplate"
import LoginFormModule from "./Components/LoginFormModule/LoginFormModule"

const Login = () => {
    return (
        <AuthTemplate
            title="Login"
            subtitle="¡Bienvenido!"
        >
            <LoginFormModule/>
        </AuthTemplate>
    )
}

Login.displayName = "login"
export default Login