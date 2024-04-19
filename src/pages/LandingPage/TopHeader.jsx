
import './LandingPage.css'
import { useNavigate } from 'react-router'
import websiteLogo from './assets/websiteLogo.png'
const TopHeader = () => {
    const signUpnav = useNavigate();
    return(
        <>
        <div className="top-part">
            <div className="website-logo">
            <img src={websiteLogo} alt={"testimg"} height={"150x"} className='chefMate-logo'/>
            </div>
            <div className="top-heading">Explore Recipes</div>
            <div className="navigations">
                <button className="btn sign-up" onClick={()=>signUpnav("/usr/signup")}>SIGN UP</button>
                <button className="btn login">LOGIN</button>
            </div>
        </div>
        </>
    )
}
export default TopHeader