
import { useState, } from 'react';
import { useDispatch } from 'react-redux';
import { Input } from '../Input';
import { signUp } from '../redux/action-creators';

const SignUpForm = () => { 

  const [userName, setUserName] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [confirmPassword, setConfirmPassword] = useState(""); 
  const [email, setEmail] = useState(""); 

  const dispatch = useDispatch() 

  const handleEmaleChange = (ev: any) => { 
    { 
      setEmail(ev.target.value); 
    } 
  }; 

  const handleUserNameChange = (ev: any) => { 
    { 
      setUserName(ev.target.value); 
    } 
  }; 

  const handlePasswordChange = (ev: any) => { 
    { 
      setPassword(ev.target.value); 
    } 
  }; 

  const handleConfirmed = () => { 
    // if (!emailError && !passwordError && !userNameError) { 
    //   !userName && setUserNameError("You should enter a name!"); 
    //   !password && setPasswordError("You should enter a password!"); 
    //   !email && setEmailError("You should enter an email!"); 
    //   password !== confirmPassword && 
    //     setPasswordError("The password doesn't match"); 
    
    // }  
    dispatch(signUp({ 
      username: userName, 
      password, 
      email, 
    })) 
  }; 

  return ( 
    <div> 
      <Input 
        title="Name" 
        type="text" 
        placeholder="Enter your name" 
        onChange={handleUserNameChange}  
      /> 
      <Input 
        title="Email" 
        type="text" 
        placeholder="Enter your email" 
        onChange={handleEmaleChange} 
      /> 
      <Input  
        title="Password" 
        type="password" 
        placeholder="Your password" 
        onChange={handlePasswordChange} 
      /> 
      <Input 
        title="Confirm Password" 
        type="password" 
        placeholder="Confirm password" 
        onChange={(ev: any) => setConfirmPassword(ev.target.value)} 
      /> 
      <button onClick={handleConfirmed}> 
        Sign Up 
      </button> 
    </div> 
  ); 
};
export { SignUpForm }