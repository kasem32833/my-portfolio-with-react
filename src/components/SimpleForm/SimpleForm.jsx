import { useState } from "react";


const SimpleForm = () => {

    const [email, setEmail] = useState('email@gmail.com');
    const [name, setName] = useState("Abul kasem");

    const handleSubmit = e =>{
        e.preventDefault()
        console.log("Form Submitted");
        console.log(e.target.name.value);
        console.log(email);
        console.log(e.target.number.value);
    }

    const handleOnChange = e =>{
        console.log(e.target.value);
        setEmail(e.target.value)
    }

    const handleNameChange = e =>{
        setName(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleNameChange} value={name} className="border" type="text" name="name" />
                <br />
                <input onChange={handleOnChange} className="border" type="email" name="email" value={email} />
                <br />
                <input className="border" type="text" name="number" />
                <br />
                <input className="bg-gray-400 px-4 py-2 mt-4 rounded-md" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;