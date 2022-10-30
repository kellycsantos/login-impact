import styles from '../styles/SubmitButton.module.css'
function SubmitButton({value}){
    return(
        <div >
        <button className={styles.button}>{value}</button>
        </div>
    )
}
export default SubmitButton