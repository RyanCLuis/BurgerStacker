// displays an individual ingredient
// we'll use name and color from the ingredient
// each ingredient object will come from props
// and this component is rendered by IngList
// then the click will add the ingredient to the burger
// if the component is rendered by BurgerPane
// then the click will remove ir from the burger
import React, { Component } from 'react'

export default class Ingredient extends Component {
    render () {
        // console.log('this is props in Ingredient', this.props)
        // destructure our ingredient k:v pairs for easy ref
        const { name, color } = this.props.ingredient

        return (
            <p
                style={{backgroundColor: color}}
                onClick={this.props.clickFunc}
                id={this.props.itemKey}
            >
                { name }
            </p>
        )
    }
}