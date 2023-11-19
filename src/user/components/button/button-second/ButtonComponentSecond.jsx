import styles from './ButtonComponentSecond.module.css'

export function ButtonComponentSecond({title, onClick}){

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