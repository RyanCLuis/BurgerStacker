import Ingredient from './Ingredient'

const IngList = (props) => {

    const { ingredients } = props


    let allIngs = ingredients.map((ing, i) => (
        <li key={ i }>
            <Ingredient 
                ingredient={ing}
                clickFunc={props.add}
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

export default IngList