import { useState, createContext, useEffect } from 'react'
import api from '../services/api'

export const AuthContext = createContext({})



function AuthProvider({children}){

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
         async function loadStorage(){
            let storedUser = await localStorage.getItem('user')
            storedUser = await JSON.parse(storedUser)
          
            if(storedUser != null){

                if(await checkToken(storedUser.token)){
                    await setUser(storedUser)
                    await setLoading(false)
                }
            }
            await setLoading(false)
        }
        loadStorage()
        
    },[])

    async function signUp(nome, email, password){
        
        var r = await api.post('users', { 
            username: nome,
            email:email,
            password:password 
        })
        if(r){
            const token = await session(email, password)
            if(token){
                const user = await getUser(token)
                if(user){
                    const data = {
                        username:user.username,
                        email:user.email,
                        token:token
                        }
                        await storeUser(data)
                        setUser(data)
                }
            }
        }
    }
    async function signIn(email, password){
        
        const token = await session(email, password)
        if(token){
           const user = await getUser(token)
           const data = {
            username:user.username,
            email:user.email,
            token:token
            }
            await storeUser(data)
            setUser(data)

        }
    }
    async function session(email, password){
        var t = await api.post('sessions',{
            email:email,
            password:password
        })
       return t.data.token
    }
    async function getUser(t){
        const config = {
            headers: { Authorization: `Bearer ${t}` }
        };
        const bodyParameters = {
            key: "value"
         };
    
        var response = await api.post('/getuser',
        bodyParameters,
        config
        )
        return response.data
    }
    
    async function checkToken(token){
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const bodyParameters = {
            key: "value"
         };
    
        var response = await api.post('/check',
            bodyParameters,
            config
        )
        return response.data
    }
    async function storeUser(data){
        await localStorage.setItem('user',JSON.stringify(data))
    }
    return(
        <AuthContext.Provider value={{signed:!!user, user, loading, signUp, signIn}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider