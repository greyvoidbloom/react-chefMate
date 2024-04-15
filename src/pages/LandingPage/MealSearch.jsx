import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const MealSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [meals, setMeals] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMeals = async () => {
            try {
                const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
                setMeals(response.data.meals);
            } catch (error) {
                setError(error.message);
            }
        };

        if (searchTerm.trim() !== '') {
            fetchMeals();
        } else {
            setMeals([]);
        }
    }, [searchTerm]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    if (error) {
        return <div className='error-call'>Error: {error}</div>;
    }

    return (

            <div className='mealSearch-container'>
                <input
                    type="text"
                    placeholder="Search for a meal..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className='search-box'
                />
                <div className='meal-listing'>
                    {meals ? (
                        meals.map(meal => (
                            <Link to={`/meal/${meal.idMeal}`} key={meal.idMeal} className='meal-link'>
                                <div className='meal-card'>
                                    <img src={meal.strMealThumb + '/preview'} alt={meal.strMeal} className='meal-thumbnail' />
                                    <p className='meal-title'>{meal.strMeal}</p>
                                </div>
                            </Link>
                            
                        ))
                    ) : (
                        <p className='no-meals'>No meals found :(</p>
                    )}
                </div>
            </div>
            

    );
};

export default MealSearch;
