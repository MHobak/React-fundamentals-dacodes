import InputField from "../../../../components/molecules/InputField/InputField"
import TermsCheckbox from "../../../../components/molecules/TermsCheckbox/TermsCheckbox"
import Button from "../../../../components/atoms/Buttons/Button/Button"
import { useFormik } from "formik"
import axios from "axios";
import './LoginFormModule.css'

interface LoginImputsI {
    email: string,
    password: string,
    terms: boolean
}

const hanleLogin = async () => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/authentication/guest_session/new",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTExY2U2ZTBjNGUxZjQ4M2E3NDIxMDNjMDJmYjZmOSIsInN1YiI6IjY0MTM3ZDEyYTZjMTA0MDA3OTA3MTM2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IhXW1F90EvMAP_AMkFrEfMJdyuswuVnBY6_KlyVMkO0",
      },
    };

    axios
    .request(options)
    .then(function (response) {
    console.log(response.data);
    const token = response.data.guest_session_id;
    sessionStorage.setItem("token", response.data.guest_session_id);

    })
    .catch(function (error) {
        console.error(error);
    });
};

const validate = (values:LoginImputsI) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errors = {};

    if (!values.email) {
        errors.email = "Proporcione un correo"
    } else if (!values.email.match(emailRegex)) {
        errors.email = "Email no valido, intente de nuevo"
    }

    if (!values.password) {
        errors.password = "Proporcione una contraseña"
    } else if (values.password.length < 7) {
        errors.password = "La contraseña debe ser mayor a 7 caracteres"
    }

    if (!values.terms) {
        errors.terms = "Porfavor acepte los terminos y condiciones para contunuar"
    }

    return errors
}  

const LoginFormModule = () => {
    const formik = useFormik<LoginImputsI>({
        initialValues: {
            email: '',
            password: '',
            terms: false
        },
        validate,
        onSubmit: values => hanleLogin()
    })

    return (
        <form className='form' onSubmit={formik.handleSubmit}>
            <InputField
                label=' Correo electronico de DaCodes'
                placeholder='Correo'
                error={!formik.touched.email ? undefined : formik.errors.email}
                {...formik.getFieldProps('email')}
            />
            <InputField
                label='Contraseña'
                placeholder='Contraseña'
                error={!formik.touched.password ? undefined : formik.errors.password}
                {...formik.getFieldProps('password')}
                
            />
            <TermsCheckbox 
                checked={formik.values.terms}
                error={!formik.touched.terms ? undefined : formik.errors.terms}
                {...formik.getFieldProps('terms')}
            />

            <div className='submit-button'>
                <Button disabled={!formik.isValid} type="submit">Crear cuenta</Button>
            </div>
        </form>
    )
}

LoginFormModule.displayName = "Login form module"
export default LoginFormModule