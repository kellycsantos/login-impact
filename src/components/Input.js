import styles from '../styles/Input.module.css'
function Input({label,placeholder,type }){
    return(
        <div className={styles.inputContainer}>
        <label>{label}</label>
        <input type={type} placeholder={placeholder}/>
        </div>
    )
}
export default Input