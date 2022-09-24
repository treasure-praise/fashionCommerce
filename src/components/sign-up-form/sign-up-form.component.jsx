import { useState } from "react"
import { createAuthUserWithEmailAndPassword,createUserDocFromAuth } from "../../utils/firebase/firebase.utils"
import Button from "../button/button.component"
import FormInput from "../form-input/form-input.component"
import './sign-up-form.styles.scss'


const defaultFormFields ={
     displayName:'',
     email:'',
     password:'',
     confirmPassword:'',
}

const SignUpForm =()=>{
    const [formFields,setFormFields] =useState(defaultFormFields)
    const {displayName,email,password,confirmPassword}= formFields

console.log(formFields);

const resetForm=()=>{
    setFormFields({
          defaultFormFields
    })
}

const handleSubmit = async(e)=>{
    e.preventDefault()
    if (password !== confirmPassword){
        alert('Passwords dont match')
        return 
    }
    try {
        const {user} =await createAuthUserWithEmailAndPassword(email,password)
       await  createUserDocFromAuth(user, {displayName});
        resetForm()
    } catch (error) {
        if(error.code === 'auth/email-already-in-use'){
            alert('Email already exists')
        }
        console.log('user creation encountered an error',error)
    }
   
}

    const handleChange=(e)=>{
        const {name,value}=e.target
        setFormFields(
            {...formFields,[name]:value }
        )
    }
    return(
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit} action="">
                
                <FormInput label='Display Name' type="text" required name="displayName" value={displayName} onChange={handleChange} />

                
                <FormInput label='Email' type="email" required name="email" value={email} onChange={handleChange}/>

                
                <FormInput label='Password' type="password" required  name="password" value={password} onChange={handleChange}/>

                
                <FormInput label='Confirm Password' type='password' required name="confirmPassword" value={confirmPassword} onChange={handleChange}/>

                <Button >SIGN UP</Button>
            </form>
        </div>
    )
}

export default SignUpForm