import InputField from "../../../../components/molecules/InputField/InputField"
import TermsCheckbox from "../../../../components/molecules/TermsCheckbox/TermsCheckbox"
import Button from "../../../../components/atoms/Buttons/Button/Button"
import { useFormik } from "formik"
import './LoginFormModule.css'

interface LoginImputsI {
    email: string,
    password: string,
    terms: boolean
}

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
        onSubmit: values => console.log(values)
    })

    return (
        <form className='form' onSubmit={formik.handleSubmit}>
            <InputField
                name='email'
                label=' Correo electronico de DaCodes'
                placeholder=''
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                error={!formik.touched.email ? undefined : formik.errors.email}
            />
            <InputField
                name='password'
                label='Contraseña'
                placeholder=''
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                error={!formik.touched.password ? undefined : formik.errors.password}
            />
            <TermsCheckbox 
                name="terms"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.terms}
                error={!formik.touched.terms ? undefined : formik.errors.terms}
            />

            <div className='submit-button'>
                <Button type="submit">Crear cuenta</Button>
            </div>
        </form>
    )
}

LoginFormModule.displayName = "Login form module"
export default LoginFormModule