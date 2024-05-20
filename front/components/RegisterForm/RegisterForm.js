import toast from "react-hot-toast";
import RegisterFormField from "../RegisterFormFields/RegisterFormField"
import './RegisterForm.css'
import React, {useState} from "react";


const RegisterForm = (props) => {
    
    const [values,setValues] = useState({
        nome:"",
        idade:"",
        altura: 0,
        email:"",
        cidade:"",
        rua:"",
        complemento:""
    });

    const cidades = ["Abreu e Lima","Afogados da Ingazeira","Afrânio","Agrestina","Água Preta","Águas Belas","Alagoinha","Aliança","Altinho",
                    "Amaraji","Angelim","Araçoiaba","Araripina","Arcoverde","Barra de Guabiraba","Barreiros","Belém de Maria","Belém de São Francisco",
                    "Belo Jardim","Betânia","Bezerros","Bodocó","Bom Conselho","Bom Jardim","Bonito","Brejão","Brejinho","Brejo da Madre de Deus",
                    "Buenos Aires","Buíque","Cabo de Santo Agostinho","Cabrobó","Cachoeirinha","Caetés","Calçado","Calumbi","Camaragibe",
                    "Camocim de São Félix","Camutanga","Canhotinho","Capoeiras","Carnaíba","Carnaubeira da Penha","Carpina","Caruaru","Casinhas",
                    "Catende","Cedro","Chã de Alegria","Chã Grande","Condado","Correntes","Cortês","Cumaru","Cupira","Custódia","Dormentes",
                    "Escada","Exu","Feira Nova","Fernando de Noronha","Ferreiros","Flores","Floresta","Frei Miguelinho","Gameleira","Garanhuns",
                    "Glória do Goitá","Goiana","Granito","Gravatá","Iati","Ibimirim","Ibirajuba","Igarassu","Iguaraci","Inajá","Ingazeira",
                    "Ipojuca","Ipubi","Itacuruba","Itaíba","Itamaracá","Itambé","Itapetim","Itapissuma","Itaquitinga","Jaboatão dos Guararapes",
                    "Jaqueira","Jataúba","Jatobá","João Alfredo","Joaquim Nabuco","Jucati","Jupi","Jurema","Lagoa do Carro","Lagoa do Itaenga",
                    "Lagoa do Ouro","Lagoa dos Gatos","Lagoa Grande","Lajedo","Limoeiro","Macaparana","Machados","Manari","Maraial","Mirandiba",
                    "Moreilândia","Moreno","Nazaré da Mata","Olinda","Orobó","Orocó","Ouricuri","Palmares","Palmeirina","Panelas","Paranatama",
                    "Parnamirim","Passira","Paudalho","Paulista","Pedra","Pesqueira","Petrolândia","Petrolina","Poção","Pombos","Primavera",
                    "Quipapá","Quixaba","Recife","Riacho das Almas","Ribeirão","Rio Formoso","Sairé","Salgadinho","Salgueiro","Saloá","Sanharó",
                    "Santa Cruz","Santa Cruz da Baixa Verde","Santa Cruz do Capibaribe","Santa Filomena","Santa Maria da Boa Vista",
                    "Santa Maria do Cambucá","Santa Terezinha","São Benedito do Sul","São Bento do Una","São Caitano","São João",
                    "São Joaquim do Monte","São José da Coroa Grande","São José do Belmonte","São José do Egito","São Lourenço da Mata",
                    "São Vicente Ferrer","Serra Talhada","Serrita","Sertânia","Sirinhaém","Solidão","Surubim","Tabira","Tacaimbó","Tacaratu",
                    "Tamandaré","Taquaritinga do Norte","Terezinha","Terra Nova","Timbaúba","Toritama","Tracunhaém","Trindade","Triunfo",
                    "Tupanatinga","Tuparetama","Venturosa","Verdejante","Vertente do Lério","Vertentes","Vicência","Vitória de Santo Antão","Xexéu"]
    
    const inputs = [
        {
            id:1,
            name: "nome",
            placeholder: "Insira o nome do paciente",
            errorMessage: "O nome deve ter entre 3-100 caracteres e não deve conter caracteres especiais",
            type: "text",
            pattern:"[a-zA-ZÀ-ú ]{3,100}$",
            required: true
        },
        {
            id:2,
            name: "idade",
            placeholder: "Insira a idade do paciente",
            errorMessage: "",
            type: "date",
            pattern:"[0-9]{1,3}",
            required: true
        },
        {
            id:3,
            name: "altura",
            placeholder: "Insira a altura do paciente",
            errorMessage: "Insira uma altura valida",
            type: "text",
            required: true
        },
        {
            id:4,
            name: "cpf",
            placeholder: "Informe o cpf do paciente",
            errorMessage: "Insira um cpf valido",
            type: "text",
            pattern: "^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}",
            required: true
        },
    ]

    const inputsEndereco = [
        {
            id:5,
            name: "rua",
            placeholder: "Insira o nome e numero da rua",
            errorMessage: "",
            type: "text",
            required: true
        },
        {
            id:6,
            name: "complemento",
            placeholder: "Insira o complemento",
            errorMessage: "",
            type: "text",
        },
    ]


    const submitForm = (e) =>{
        e.preventDefault()
        const formData = new FormData(e.target);
        const payload = Object.fromEntries(formData);

        payload.idade = getAge(payload.idade)
        payload.altura = payload.altura.replace(",",".")
        payload.altura = parseFloat(payload.altura)
        console.log(payload.altura)

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
            <h2>Cadastro de Pacientes</h2>
            <form onSubmit={submitForm} className="form">
                {inputs.map((input) =>(
                    <RegisterFormField key={input.id} {...input} value = {values[input.name]} onChange={onChange} />
                ))}
                <select className="cidades" name="cidade" onChange={onChange}>
                    {cidades.map((cidade) => (
                        <option>{cidade}</option>
                    ))}
                </select>
                {inputsEndereco.map((input) =>(
                    <RegisterFormField key={input.id} {...input} value = {values[input.name]} onChange={onChange} />
                ))}
                <button type="submit">Registrar</button>
            </form>
        </div>
    )
}

export default RegisterForm