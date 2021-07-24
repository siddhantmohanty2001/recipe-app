import React from 'react'
import Ingredients from './Ingredients'
const Recipe = ({label, image,ingredientLines}) => {
    return (
        <div className="recipe">
            <h2>{label}</h2>
            <img src={image}></img>
            <ol><Ingredients ingredients={ingredientLines}/></ol>
        </div>
    )
}

export default Recipe
