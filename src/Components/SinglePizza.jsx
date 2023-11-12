function SinglePizza(props) {
    
    const {name, ingredients, price, photoName, soldOut} = props.pizza

    return (
        <div className={`pizza flex gap-6 ${soldOut && 'sold-out'}`}>
            <img src={`${photoName}`} alt={`${name}`} />
            
            <div className="pizzaContent flex flex-col justify-between">
                <h4 className="text-[1.2rem]">{name}</h4>
                <span className="italic text-sm">{ingredients}</span>
                <span>{soldOut ? 'SOLD OUT' : price}</span>
            </div>
        </div>
    )
}

export default SinglePizza
