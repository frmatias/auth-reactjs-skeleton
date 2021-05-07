import './style.css'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth'
function SignUp() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {signUp} = useContext(AuthContext)

    function handleSubmit(e) {
        e.preventDefault();
        signUp(nome, email, password)
    }
    return (
      <div className="container-center">
          <div className="login">
            <div className="logo-area">
                
            </div>
            <form onSubmit={handleSubmit}>
                <h1>Cadastrar</h1>
                <input type="text" placeholder="Digite seu nome" value={nome} onChange={(e)=>{setNome(e.target.value)}}/>
                <input type="email" placeholder="Digite seu email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                <input type="password" placeholder="Digite sua senha" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                <button type="submit">Cadastrar</button>
            </form>

            <div className="link-area">
                <Link to="/">Já possui uma conta?</Link>   
                <Link to="/reset">Esqueceu a senha?</Link>   
            </div>

        </div>
      </div>
    );
  }
  
  export default SignUp;
  