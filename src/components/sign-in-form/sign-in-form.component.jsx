import {useState} from 'react'
import Button from "../button/button.component"
import FormInput from '../form-input/form-input.component'
import { signInWithGooglePopUp ,createUserDocFromAuth, signInAuthWithEmailAndPassword } from "../../utils/firebase/firebase.utils"
import './sign-in-form.styles.scss' 


const SignInForm =()=>{

    const signInWithGoogle= async()=>{
     await signInWithGooglePopUp()
    // const {user} = await signInWithGooglePopUp()
    //   await createUserDocFromAuth(user);
    }

    
    const defaultFormFields ={
        email:'',
        password:''
   }
   const [formFields,setFormFields] =useState(defaultFormFields)
   const {email,password}= formFields

console.log(formFields);

const resetForm=()=>{
   setFormFields({
         defaultFormFields
   })
}

const handleSubmit = async(e)=>{
   e.preventDefault()
   
   try {
       await signInAuthWithEmailAndPassword(email,password)
    //    console.log(response);
       resetForm()
   } catch (error) {
    switch(error.code){
        case 'auth/wrong-password':
            alert('incorrect password')
            break
        case 'auth/user-not-found':
            alert('no user associated witth this email')
            break;
        default:
            console.log(error)
    }
   }
  
}

   const handleChange=(e)=>{
       const {name,value}=e.target
       setFormFields(
           {...formFields,[name]:value }
       )
   }

    return (

        
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit} action="">
                
                              
                <FormInput label='Email' type="email" required name="email" value={email} onChange={handleChange}/>

                
                <FormInput label='Password' type="password" required  name="password" value={password} onChange={handleChange}/>

                
                <div className='buttons-container'>
                    <Button >SIGN IN</Button>
                    <Button type='button' onClick={signInWithGoogle} buttonType={'google'}>SIGN IN WITH GOOGLE</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm