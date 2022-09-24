 
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import { signInWithGooglePopUp, createUserDocFromAuth} from '../../utils/firebase/firebase.utils'


const SignIn =()=>{
    const logGoogleUser= async()=>{
        const {user} = await signInWithGooglePopUp()
       createUserDocFromAuth(user);
    }

    return(
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google Pop-up</button>
            <SignUpForm/>
        </div>
    )
}

export default SignIn