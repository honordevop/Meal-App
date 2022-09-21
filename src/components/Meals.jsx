// import { useContext } from "react";
// import { AppContext } from "../context";
import { useGlobalContext } from "../context";
import { GoThumbsup } from 'react-icons/go';


const Meals = () => {
    // const context = useContext(AppContext)
    const {meals} = useGlobalContext()


    
    return <section className="section-center">
            {meals.map((singleMeal)=>{
                const {idMeal, strMeal: title, strMealThumb: image} = singleMeal

                // console.log(singleMeal)
                return <article key={idMeal} className='single-meal'>
                    <img src={image} alt="" className="img" />
                    <footer>
                        <h5>{title}</h5>
                        <button className="like-btn">
                            <GoThumbsup/>
                        </button>
                    </footer>
                </article>
            })}
        </section>
}

export default Meals