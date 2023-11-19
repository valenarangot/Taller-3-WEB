import { AuthContextProvider } from "../context/AuthContextProvider";
import { useForm } from "../hooks/useForm";
import { ButtonComponentSecond } from "../../user/components/button/button-second/ButtonComponentSecond";
import styles from './LoginPage.module.css'

export function LoginPage(){

const {
    formState,
    handleInputChange,
    handleSubmit,
    showError
  } = useForm();


 return(
    <div className={styles.login}>
      <AuthContextProvider>
        <form className={styles.form} onSubmit={handleSubmit}>
            <input 
            type="email" 
            name="email" 
            placeholder="Email"
            onChange={handleInputChange}
            value={formState.email}/>
        
            <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleInputChange}
            value={formState.password}/>  

            {showError && (
            <div style={{ color: "red" }}>
              Por favor, completa ambos campos.
            </div>
          )}

            <ButtonComponentSecond onClick={handleSubmit} title="Log In" disabled={!formState.email || !formState.password}/> 
            
        </form>
    </AuthContextProvider>
    </div>
  
    
 )
}