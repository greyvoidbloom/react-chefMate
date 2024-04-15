import './SignUp.css'
import { useNavigate } from 'react-router'
const SignUp = () => {
    const goHome = useNavigate();
    return(
        <>
        <div className="body-div">
        <div class="all">
        <div class="signin">
            <h2 class="form-title" id="signin">Sign in</h2>
            <div class="form-holder">
                <input type="text" class="input" placeholder="Username" />
                <input type="email" class="input" placeholder="Email" />
                <input type="password" class="input" placeholder="Password" />
            </div>
            <button class="submit-btn" onClick={()=>goHome("/")}>Sign In</button>
            </div>
        </div>
        </div>
        </>
    )
}
export default SignUp