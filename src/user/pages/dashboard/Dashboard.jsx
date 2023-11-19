import { CardCharacter } from "../../components/card-preview/CardCharacter"
import { useApp } from "../../hooks/useApp"
import { useForm } from "../../../auth/hooks/useForm";
import { useNavigate } from "react-router-dom"
import { ButtonComponentFirst } from "../../components/button/button-first/ButtonComponentFirst";
import styles from './Dashboard.module.css'

export function Dashboard(){
    const navigate = useNavigate();
    const {data} = useApp();
    const {handleLogOut} = useForm()

    const characters = [];

    const onClick = (id) => {
        navigate('/Details/'+id)
    }

    if(data !== null ) {
        data.forEach((character) => {
            characters.push(<CardCharacter 
                 characterimg = {character.image}
                 name = {character.name} 
                 origin = {character.origin.name}  
                 gender = {character.gender} 
                 species = {character.species}
                 onClick={onClick}
                 key={character.id}
                 id={character.id}
             />)
         })
    }

    if (data === null) return <p>Data is loading...</p>

    return (
        <div className={styles.dashboard}>
            <ButtonComponentFirst onClick={handleLogOut} title="Log Out"/>
            {characters}
           
        </div>
    );
}