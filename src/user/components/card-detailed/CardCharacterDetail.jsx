/* eslint-disable react/prop-types */
import styles from './CardCharacterDetail.module.css'

export function CardCharacterDetail ({id, characterimg, name, origin, status, species, gender, location}) {
    return(
        <div className={styles.detailCard}>
            <img src={characterimg}/>
            <div id={id}>
                <h2>{name}</h2>
                <h4>Origin: {origin}</h4>
                <h4>Last seen: {location}</h4>
                <p>Gender: {gender}</p> 
                <p>Species: {species}</p> 
                <p>Status: {status}</p> 
                
                



            </div>
        </div>
    )
}