import React from 'react'
import Recipe from './Recipe'

const Recipes = ({recipes}) => {
    return (
        <>
            {recipes.map((item)=>{return (<Recipe label={item.recipe.label} image={item.recipe.image} ingredientLines={item.recipe.ingredientLines} />)})}
        </>
    )
}

export default Recipes
