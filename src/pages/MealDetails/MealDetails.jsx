import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './MealDetails.css'
const MealDetails = () => {
    const takemeback = useNavigate();
    const [meal, setMeal] = useState(null);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchMealDetails = async () => {
            try {
                const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
                setMeal(response.data.meals[0]);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchMealDetails();
        return () => {
            setMeal(null);
            setError(null);
        };
    }, [id]);

    if (error) {
        if (error == "null is not an object (evaluating 'response.data.meals[0]')"){
            return <div className='recipe-doesnt-exist'><div className="error-text">Recipe doesnt exist (yet) <br/> Let us Cook</div></div>
        }
        return <div className='other-errors'>We're Sorry, but we're facing errors:<br/>{error}</div>;
    }
    if (!meal) {
        return <div className='loading-page'>Loading...</div>;
    }
    return (
        <div className="detail-page">
        <div className="meal-details-container">
            <div className="go-back-to-homePage" onClick={() => takemeback("/")}>
                ←
            </div>
            <div className="recipe-heading">{meal.strMeal}</div>
            <div className="visual-and-requirements">
                <img src={meal.strMealThumb} alt={meal.strMeal} className='recipe-thumbnail'/>
                <div className="ingredients-and-measurements">
                    
                        {Object.keys(meal)
                            .filter(key => key.startsWith('strIngredient') && meal[key])
                            .map((key, index) => (
                                <div key={key} className='individual-ingredient'>
                                    {meal[key]}:  {meal[`strMeasure${index + 1}`]}
                                </div>
                            ))}
                </div>
                
            </div>
            <div className="category-and-area">
                <div className="misc recipe-Category">{meal.strCategory}</div>
                <div className="misc countryOfOrigin">{meal.strArea}</div>
            </div>
            <div className="recipe-instructions">
                <div className="instruction-Heading">Instructions:</div>
                <div className="instructions">→{meal.strInstructions.split('.').join('. \n')}</div>
            </div>
            <div className="youtube-links">
                <a href={meal.strYoutube} target='_blank'>Click Here to follow a Video Recipe on Youtube!</a>
            </div>

        </div>
        </div>
    );
};

export default MealDetails;
