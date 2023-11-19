/* eslint-disable react/prop-types */
import styles from './CardCharacter.module.css'

export function CardCharacter ({id, characterimg, name, origin, gender, species, onClick}) {

    return(
        <div
            className={styles.cardCharacter}
            onClick={() => onClick(id)}>
            <img src={characterimg}/>
            <div className={styles.cardInfo}>
                <h2>{name}</h2>
                <h4>Origin: {origin}</h4>
                <p>Gender: {gender}</p>
                <p>Species: {species}</p> 
                
                
            </div>
        </div>
    )
}