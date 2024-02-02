import React, { Component } from 'react'

export default class Ingredient extends Component {
    render () {
        // console.log('this is props in Ingredient', this.props)
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