import React from 'react'

const Ingredients = ({ingredients}) => {
    return (
            ingredients.map((item)=>{return <li>{item}</li>})
        
    )
}

export default Ingredients
