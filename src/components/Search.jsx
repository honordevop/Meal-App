import { useState } from "react";
import { useGlobalContext } from "../context";
import { FaHome } from 'react-icons/fa';


const Search = () => {

    const {setSearchTerm, fetchRandomMeal, fetchMeals, allMealsUrl} = useGlobalContext()
    const [text, setText] = useState('')

        const handleChange = (e) => {
            setText(e.target.value)
        }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (text) {
            setSearchTerm(text)
            //Set the searchedText to null after search
            // setText('')  //Optional
        }
    }

    const handleRandomMeal = ()=> {
        setSearchTerm('')
        //Set the searchedText to null after search so that it will not be use as a determinant for fetchRandomMeal
        setText('')
        fetchRandomMeal()
    }
    return <header className="search-container">
        
        
        <form onSubmit={handleSubmit}>
            <button className="home-btn" onClick={() => fetchMeals(allMealsUrl)}> <FaHome/> </button>
            <input type="text" placeholder="type favorite meal" value={text} onChange={handleChange} className="form-input"/> 
            <button type="submit" className="btn">Search</button>
            <button type="button" className="btn btn-hipster" onClick={handleRandomMeal}>Suprise me!</button>
        </form>
    </header>
}

export default Search