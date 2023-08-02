import './CheckBox.css'

interface CheckoxI {
    name: string;
}

const CheckBox = ({name }: CheckoxI) => <input name={name}  type="checkbox" className='checkbox'/>

CheckBox.displayName = "Check Box"
export default CheckBox