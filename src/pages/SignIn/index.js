import './style.css'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth'

function SingnIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {signIn} = useContext(AuthContext)

    function handleSubmit(e) {
        e.preventDefault();
        signIn(email, password)

    }
    return (
      <div className="container-center">
          <div className="login">
            <div className="logo-area">
                
            </div>
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <input type="email" placeholder="Digite seu email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                <input type="password" placeholder="Digite sua senha" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                <button type="submit">Entrar</button>
            </form>

            <Link to="/register">Criar uma conta</Link>   

        </div>
      </div>
    );
  }
  
  export default SingnIn;
  