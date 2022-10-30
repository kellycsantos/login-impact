import styles from '../styles/LoginContainer.module.css'
import Input from './Input'
import SubmitButton from './SubmitButton'
import Logo from '../assets/icon.png'

function Container(){
    return(
        <div className={styles.container}>
        <img src={Logo} alt="genshim-impact"/>
       <Input type="text" label="Escolha seu nickname" placeholder="Moomo123" />
       <Input type="email" label="Insira seu melhor e-mail" placeholder="moomoo@teste.com" />
       <Input type="password" label="Escolha uma senha forte" placeholder="******" />
        <SubmitButton value="Criar conta"/>
        <p>Já tem uma conta? <a href="/#">LOGIN</a></p>

        </div>
    )
}
export default Container