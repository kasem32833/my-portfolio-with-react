import useInputState from "../../hooks/useInputState";


const HookForm = () => {

    const [name, handleNameChange] = useInputState('Abul hooked')

    const handleSubmit = e =>{
        e.preventDefault();
        console.log('Form data', name);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={handleNameChange} className="border-2 border-gray-300 px-4 py-2 mb-4" type="text" name="name" id="" />
                <br />
                <input className="border-2 border-gray-300 px-4 py-2 mb-4" type="email" name="email" id="" />
                <br />
                <input className="border-2 border-gray-300 px-4 py-2 mb-4" type="password" name="password" id="" />
                <br />
                <input className="border-2 border-gray-300 px-4 py-2 mb-4" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;