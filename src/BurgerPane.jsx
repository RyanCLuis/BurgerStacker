import Ingredient from './Ingredient'

const BurgerPane = (props) => {
    const { ingredients } = props

    let burgerBits = ingredients.map((ing, i) => (
        <li key={ i }>
            <Ingredient 
                ingredient={ing}
                clickFunc={props.remove}
                itemKey = {i}
            />
        </li>
    ))

    return (
        <section className='pane'>
            <h3>Burger Stack</h3>
            <ul>
                { burgerBits }
            </ul>
            <button onClick={props.clear}>Clear Burger</button>
        </section>
    )

}

export default BurgerPane