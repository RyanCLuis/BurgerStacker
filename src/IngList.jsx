import React, { Component } from 'react'
import Ingredient from './Ingredient'

export default class IngList extends Component {
    render () {
        const { ingredients } = this.props


        let allIngs = ingredients.map((ing, i) => (
            <li key={ i }>
                <Ingredient 
                    ingredient={ing}
                    clickFunc={this.props.add}
                    itemKey = {i}
                />
            </li>
        ))


        return (
            <section className='pane'>
                <h3>Ingredient List</h3>
                <ul>
                    { allIngs }
                </ul>
            </section>
        )
    }
}