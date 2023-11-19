
import styles from './ButtonComponentFirst.module.css'

export function ButtonComponentFirst({title, onClick}){

    return (
        <>
            <button
            className={styles.button}
            onClick={onClick}>
            {title}
            </button>
        </>
    )
}