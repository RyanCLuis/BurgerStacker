const Ingredient = (props) => {
    const { name, color } = props.ingredient

    return (
        <p
            style={{backgroundColor: color}}
            onClick={props.clickFunc}
            id={props.itemKey}
        >
            { name }
        </p>
    )
}

export default Ingredient