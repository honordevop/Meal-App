import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';


const AppContext = React.createContext()

const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=a'
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
    const [meals, setMeals] = useState([])

    // using axios to fetch data

    const fetchMeals = async (url) => {
        try {
            //Gets all response
            // const response = await axios(url)

            //Response destructured to bring out jus data object
            const { data } = await axios(url)
            setMeals(data.meals)
            // console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {

        fetchMeals(allMealsUrl)
    }, [])
    // return <AppContext.Provider value='hello'>
    return <AppContext.Provider value={{ meals }}>
        {children}
    </AppContext.Provider>
}


export { AppContext, AppProvider }


// Seeting up a custom hook

export const useGlobalContext = () => {
    return useContext(AppContext)
}
