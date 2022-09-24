import './form-input.styles.scss'

const FormInput =({label,...otherProps})=>{
    return(
        <div className="group">
            <input className="form-input" {...otherProps} />
            {label && (
            <label className={`${otherProps.value.lenght ? 'shrink': ''} form-input-label`} htmlFor="">{label}</label>)}
        </div>
    )
}

export default FormInput