import InputField from "../../../../components/molecules/InputField/InputField"
import TermsCheckbox from "../../../../components/molecules/TermsCheckbox/TermsCheckbox"
import Button from "../../../../components/atoms/Buttons/Button/Button"
import { useFormik } from "formik"
import './LoginFormModule.css'

export interface LogininputsI {
    email: string,
    password: string,
    terms: boolean
}

const validate = (values:LogininputsI) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errors:any = {};

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

export const LoginFormModule = ( {loginMethod }:{loginMethod:(input:LogininputsI) => void}) => {
    const formik = useFormik<LogininputsI>({
        initialValues: {
            email: '',
            password: '',
            terms: false
        },
        validate,
        onSubmit: values => loginMethod(values)
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