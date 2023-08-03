import './CheckBox.css'

export interface CheckboxI {
    name: string;
    checked?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CheckBox = ({name, onChange, onBlur, checked = false }: CheckboxI) => 
    <input 
        name={name} 
        onChange={onChange} 
        onBlur={onBlur} 
        checked={checked} 
        type="checkbox" 
        className='checkbox'
    />

CheckBox.displayName = "Check Box"