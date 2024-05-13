import './RegisterFormField.css';
import React, {useState} from "react"

const RegisterFormField = (props) => {

    const [focused, setFocused] = useState(false);
    const {id, errorMessage, onChange, ...inputProps} = props; 

    const handleFocus = (e) =>{
        setFocused(true);
    };


    return(
        <div className="field">
            <input {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString()}/>
            <span>{errorMessage}</span>
        </div>
    )
}

export default RegisterFormField