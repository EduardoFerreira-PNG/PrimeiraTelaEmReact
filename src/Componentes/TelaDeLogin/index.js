import "./Tela.css"
import img from './instagram.png';

const Tela = () => {
    return (
        <div className="main">
            <header className="cabeca">
            <img src={img}/>
            </header>
            <div className="tela__login">
                <div className="login__usuario">
                <label for="email">Digite seu Email: </label>
                <input name="email" type="email" placeholder="Digite seu email" required></input>
                <label for="senha">Digite sua Senha: </label>
                <input name="senha" type="password" placeholder="Digite sua senha" required></input>
                </div>
                <a href="#" className="botao__login">Login</a>

                <a href="#" className="btn__alternativo">Entre com o Facebook</a>
                <a href="#" className="btn__esqueceu">Esqueceu <span>a senha?</span></a>
            </div>
            <div className="tela__login--cadastro">
                <p>Não tem uma conta? <span>Cadastre-se</span></p>
            </div>

            <footer>
                <p>Direitos Autorais Eduardo - 2022 ©</p>
            </footer>

        </div>
    )
} 

export default Tela 