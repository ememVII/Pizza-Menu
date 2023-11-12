import pizzaData from "../../data"
import SinglePizza from "./SinglePizza"

function Pizzas() {

    return (
        <div className="pizzas grid sm:grid-cols-2 grid-cols-1 gap-10 mt-10">
            {pizzaData.map((pizza) => <SinglePizza pizza={pizza} key={pizza.name}/>)}
        </div>
    )
}

export default Pizzas
