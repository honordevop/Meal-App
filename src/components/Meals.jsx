// import { useContext } from "react";
// import { AppContext } from "../context";
import { useGlobalContext } from "../context";
import Loading from "./pageloading";
import { GoThumbsup } from 'react-icons/go';


const Meals = () => {
    // const context = useContext(AppContext)
    const {meals, loading, selectMeal, addToFavorites} = useGlobalContext()

    if (loading) {
        return <section className="section">
            <Loading/>
        </section>
    }

    if (meals.length < 1 ) {
        return <section className="section">
            <h4>No meals matched your search term. Please try again.</h4>
        </section>
    }

    
    return <section className="section-center">
            {meals.map((singleMeal)=>{
                const {idMeal, strMeal: title, strMealThumb: image} = singleMeal

                // console.log(singleMeal)
                return <article key={idMeal} className='single-meal'>
                    <img src={image} alt="" className="img" onClick={()=> selectMeal(idMeal)} />
                    <footer>
                        <h5>{title}</h5>
                        <button className="like-btn" onClick={() => addToFavorites(idMeal)}>
                            <GoThumbsup/>
                        </button>
                    </footer>
                </article>
            })}
        </section>
}

export default Meals