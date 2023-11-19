import { useState } from "react"
import { useAuth } from "./useAuth"
import { useNavigate } from "react-router-dom"

export const useForm = () =>{

    const navigate = useNavigate()
 
    const [formState, setFormstate] = useState({
        email : '',
        password : '',

    });

    const {logIn, logOut} = useAuth()
    const [showError, setShowError] = useState(false);




    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     logIn(formState)
    //     navigate('/Dashboard')

    // }    

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formState.email !== '' && formState.password !== '') {
            logIn(formState);
            navigate('/Dashboard');
        } else {
            setShowError(true);
        }
    };
 

    const handleLogOut = (e) =>{
        e.preventDefault()
        logOut()
        navigate('/')
    }

    const handleInputChange = ({target}) => {
        setFormstate({
            ...formState,
            [target.name] : target.value
            
        })
    }

    return{
        handleInputChange,
        handleSubmit,
        handleLogOut,
        formState,
        showError,
    }
}