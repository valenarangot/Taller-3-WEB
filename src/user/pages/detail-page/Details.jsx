import { useParams } from "react-router-dom";
import { useDetails } from "../../hooks/useDetails";
import { useForm } from "../../../auth/hooks/useForm";
import { CardCharacterDetail } from "../../components/card-detailed/CardCharacterDetail";
import { useNavigate } from "react-router-dom"
import { ButtonComponentFirst } from "../../components/button/button-first/ButtonComponentFirst";
import { ButtonComponentSecond } from "../../components/button/button-second/ButtonComponentSecond";
import styles from './Details.module.css'

export function Details() {
    const navigate = useNavigate();
    const routeParams = useParams();
    const idCharacter = routeParams.id;
    const {data} = useDetails(idCharacter);
    const {handleLogOut} = useForm()

    if (data === null) return <p>Data is loading...</p>

    return(
        <div className={styles.detailPage}>
            <ButtonComponentSecond onClick={() => navigate('/dashboard')} title="Back"/>
            <ButtonComponentFirst onClick={handleLogOut} title="Log Out"/>
            <CardCharacterDetail
                characterimg = {data.image}
                name = {data.name} 
                origin = {data.origin.name} 
                location = {data.location.name}
                gender={data.gender} 
                status = {data.status} 
                species = {data.species}
                id={data.id}
                
                

            />
        </div>
    )
}