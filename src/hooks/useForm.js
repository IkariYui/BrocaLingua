import {useState} from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReCAPTCHA from 'react-google-recaptcha';
 const useForm = (initialData, onValidate) => {
    const [form, setForm] = useState(initialData);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({}); 

    const handleChange = (event) =>{
        const {name,value} = event.target;
            setForm({
                ...form,
                [name]: value
            });
    };

    
    const handleSubmit = (event) =>{
        event.preventDefault()
        const err = onValidate(form)
        if(err === null){
            console.log("Sending form")
        } else {
            setErrors(err)
            console.log(err)
        }
        
    };

    return {
        form, errors, loading, handleChange, handleSubmit,
    };
};

export default useForm;