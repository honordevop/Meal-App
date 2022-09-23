import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';


const AppContext = React.createContext()

const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'

// Using Fetch API to fetch data from API
/* const fetchData = async () => {
    try {
        const response = await fetch('https://randomuser.me/api')
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }

    fetchData() //call the function inside useEffect(()=>{},[])
} */



const AppProvider = ({ children }) => {
    const [meals, setMeals] = useState([])      //Setting state values

    // Set the ap to show loading while data is been fetched from the API
    const [loading, setLoading] = useState(false)

    // Set state variable for searchTerm
    const [searchTerm, setSearchTerm] = useState('')

    // Set state variable for modal element
    const [showModal, setShowModal] = useState(false)
    //SelectedMeal to be displayed in modal
    const [selectedMeal, setSelectedMeal] = useState(null)

    

  

    // using axios to fetch data

    const fetchMeals = async (url) => {
        setLoading(true)
        try {
            //Gets all response
            // const response = await axios(url)

            //Response destructured to bring out jus data object
            const { data } = await axios(url)

            // handles null response from APi
            if (data.meals) {
                setMeals(data.meals)
            }
            else {
                setMeals([])
            }
            
            // console.log(data)
        } catch (e) {
            console.log(e.error)
        }
        setLoading(false)
    }



    // Funtion for fetching random URL
    const fetchRandomMeal = ()=> {
        fetchMeals(randomMealUrl)
    }

    //Function for modal meal display
    const selectMeal = (idMeal, favoriteMeal)=>{
        let meal;
        if (favoriteMeal) {
            meal = favorites.find((meal)=>meal.idMeal === idMeal)
        } else {
            meal = meals.find((meal)=>meal.idMeal === idMeal)
        }
        // console.log(idMeal)
        setSelectedMeal(meal)
        setShowModal(true)
    }

    // Funtion to retrieve favorite meal from localStorage if it exist
    const getFavoritesFromLocalStorage = () =>{
        let favorites = localStorage.getItem('favorites');
        if (favorites) {
            favorites = JSON.parse(localStorage.getItem('favorites'))
        } else {
            favorites = []
        }
        return favorites
    }

    //Set State variable to show fovourites
    const [favorites, setFavorites] = useState(getFavoritesFromLocalStorage())

    //Function for favorite meal
    const addToFavorites = (idMeal) => {
        // console.log(idMeal)
        
        const alreadyFavorite = favorites.find((meal) => meal.idMeal === idMeal);
        if (alreadyFavorite) return
        const meal = meals.find((meal) => meal.idMeal == idMeal);
        const updatedFavorites = [...favorites, meal]
        setFavorites(updatedFavorites)
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
    }
    const removeFromFavorites = (idMeal) => {
        const updatedFavorites = favorites.filter((meal) => meal.idMeal !== idMeal);
        setFavorites(updatedFavorites)
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
    }

    const closeModal = ()=> {
        setShowModal(false)
    }

    useEffect(() => {
        fetchMeals(allMealsUrl)
    }, [])

    useEffect(() => {
        if (!searchTerm) return  

        // Set the Url to be dynamic based on searchTerm
        fetchMeals(`${allMealsUrl}${searchTerm}`)
    }, [searchTerm])
    // return <AppContext.Provider value='hello'>
    return <AppContext.Provider value={{ loading, meals, setSearchTerm, 
    fetchRandomMeal, showModal, selectMeal, selectedMeal, closeModal,
    favorites, addToFavorites, removeFromFavorites }}>
        {children}
    </AppContext.Provider>
}


export { AppContext, AppProvider }


// Seeting up a custom hook

export const useGlobalContext = () => {
    return useContext(AppContext)
}
