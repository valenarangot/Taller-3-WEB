import { useState } from "react";
import { AuthContext } from "./authContext";
import styles from './AuthStyles.module.css'


export function AuthContextProvider({children}){

    const [isLogged, setIsLogged] = useState(false)
    const [conditional, setConditional] = useState({
        email: '',
        password: '',
    })
  
    const logIn = (user) => {
        console.log("loggin with user data", user);

        if (user.email !== '' && user.password !== '' ) {
            setIsLogged(true)
          } else {
              setIsLogged(false)
          }
          
          console.log(user);
      }

    const logOut = () =>{
        setIsLogged(false)
        console.log(setIsLogged)
    }
        

    return(
        <div className={styles.authContainer}>
        <AuthContext.Provider value={
            {
                isLogged,
                logIn,
                logOut,
                conditional,

            }
        } >
            {
                children
            }
        </AuthContext.Provider>
        
        </div>
        
    )
}