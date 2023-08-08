import axios from "axios";
import AuthTemplate from "../../templates/AuthTemplate/AuthTemplate"
import { LoginFormModule, LogininputsI } from "./Components/LoginFormModule/LoginFormModule"
import { NavigateFunction, useNavigate } from "react-router-dom";

const handleToken = async (input:LogininputsI, navigate: NavigateFunction) => {
    

    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/authentication/guest_session/new",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTExY2U2ZTBjNGUxZjQ4M2E3NDIxMDNjMDJmYjZmOSIsInN1YiI6IjY0MTM3ZDEyYTZjMTA0MDA3OTA3MTM2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IhXW1F90EvMAP_AMkFrEfMJdyuswuVnBY6_KlyVMkO0",
      },
    };

    console.error(input);//send

    axios
    .request(options)
    .then(function (response) {
        sessionStorage.setItem("pelis-token", response.data.guest_session_id);
        navigate("/")
    })
    .catch(function (error) {
        console.error(error);
    });
};

const Login = () => {   
    const navigate = useNavigate();

    const handleLoogin = (input:LogininputsI) => {
        handleToken(input, navigate)
    }
    return (
        <AuthTemplate
            title="Login"
            subtitle="¡Bienvenido!"
        >
            <LoginFormModule loginMethod={handleLoogin}/>
        </AuthTemplate>
    )
}

Login.displayName = "login"
export default Login