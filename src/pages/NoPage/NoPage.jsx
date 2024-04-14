import './NoPage.css'
import { useNavigate } from 'react-router'
const NoPage = () => {

    const navigateToHome = useNavigate();
    return(<>
    <div className="error-page">
    <div className="page-not-found">
        404 Page not found =(
    </div>
    <div className="go-back-text">
        Please Go to HomePage to see more Recepies
    </div>
    <button onClick={() => navigateToHome("/")} className='go-home-konkon'>Click Here To Go to HomePage</button>
    </div>
    
    </>)

}
export default NoPage