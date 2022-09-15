import Item from "../../item";
import "./Choice.css";

const CookChoice = ({ food }) => {

    const ItemProp = (obj) => ({
        key: obj.name,
        name: obj.name,
        FirstEmojis: [{ emoji: obj.emoji, icon: obj.icon }],
        type: food.name
    })

    return (
        <div className="CookChoice__container">
            <h2>{food.title || ""}</h2>
            <div className="CookChoice__container--items">
                {
                    food.items.map(f => (
                        <Item {...ItemProp(f)} />
                    ))
                }
            </div>
        </div>
    )
}

export default CookChoice;