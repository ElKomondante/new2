
import { useState, } from 'react';
import { useDispatch } from 'react-redux';
import { Input } from '../Input';
import { SignIn, signUp,setUserInfo } from '../redux/action-creators';
import { getInitialState } from '../redux/reducers'

const SignInForm = () => { 

const [userName, setUserName] = useState(""); 
const [password, setPassword] = useState(""); 
const [email, setEmail] = useState(""); 

const dispatch = useDispatch() 

const handleEmale = (ev: any) => { 
    { 
    setEmail(ev.target.value); 
    } 
}; 
const handlePassword = (ev: any) => { 
    { 
    setPassword(ev.target.value); 
    } 
}; 

const handleConfirmed = () => {  
    dispatch(SignIn({ 
        password, 
        email, 
    })) 
}; 

const handleLogOut = () => {  
    dispatch(getInitialState())
}; 



return ( 
    <div>  
    <Input 
        title="Email" 
        type="text" 
        placeholder="Enter your email" 
        onChange={handleEmale} 
    /> 
    <Input  
        title="Password" 
        type="password" 
        placeholder="Your password" 
        onChange={handlePassword} 
    /> 
    <button onClick={handleConfirmed}> 
        Sign In 
    </button> 
    <button onClick={handleLogOut}> 
        Log Out  
    </button> 
    </div> 
); 
};
export { SignInForm }