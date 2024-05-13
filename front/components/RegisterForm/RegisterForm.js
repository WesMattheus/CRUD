import toast from "react-hot-toast";
import RegisterFormField from "../RegisterFormFields/RegisterFormField"
import './RegisterForm.css'
import React, {useState} from "react";


const RegisterForm = (props) => {
    
    const [values,setValues] = useState({
        nome:"",
        idade:"",
        email:"",
    });

    const inputs = [
        {
            id:1,
            name: "nome",
            placeholder: "Insira seu nome",
            errorMessage: "O nome deve ter 3-16 caracteres e não deve conter caracteres especiais",
            type: "text",
            pattern:"[a-zA-ZÀ-ú]{3,16}$",
            required: true
        },
        {
            id:2,
            name: "idade",
            placeholder: "Insira sua idade",
            errorMessage: "",
            type: "date",
            pattern:"",
            required: true
        },
        {
            id:3,
            name: "email",
            placeholder: "Insira o email",
            errorMessage: "Insira um e-mail valido",
            type: "text",
            pattern: "^[a-z0-9.]{1,64}@[a-z0-9.]{1,255}",
            required: true
        },
    ]


    const submitForm = (e) =>{
        e.preventDefault()
        const formData = new FormData(e.target);
        const payload = Object.fromEntries(formData);
        payload.idade = getAge(payload.idade)
        fetch('http://localhost:8080/crud',{
            method: 'POST',
            headers: {"Content-Type":  "application/json"},
            body: JSON.stringify(payload)
        }).then((response) =>{
            if(!response.ok){toast.error("Usuario não foi registrado")}
            if(response.ok){toast.success("Usario registrado")}
            console.log("new User added")
        })
        console.log(payload);
    }
    const onChange = (e) =>{
        setValues({...values, [e.target.name]: e.target.value});
    }

    function getAge(dob){
        var today = new Date();
        var birthDate = new Date(dob);  
        var age_now = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
        {
            age_now--;
        }
        console.log(age_now);
        return age_now;
    }

    return(
        <div className="container-form">
            <h2>Cadastro Usuario</h2>
            <form onSubmit={submitForm} className="form">
                {inputs.map((input) =>(
                    <RegisterFormField key={input.id} {...input} value = {values[input.name]} onChange={onChange} />
                ))}
                <button type="submit">Registrar</button>
            </form>
        </div>
    )
}

export default RegisterForm