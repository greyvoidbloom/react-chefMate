
import './LandingPage.css'
const TopHeader = () => {
    return(
        <>
        <div className="top-part">
            <div className="website-logo">ChefMate</div>
            <div className="top-heading">Explore Recipes</div>
            <div className="navigations">
                <button className="btn sign-up">SIGN UP</button>
                <button className="btn login">LOGIN</button>
            </div>
        </div>
        </>
    )
}
export default TopHeader