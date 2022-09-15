import { useDispatch, useSelector } from "react-redux";
import { toggleFood, selectTool } from "../../redux/cookReducer";
import "./Item.css";

const Item = ({ name, FirstEmojis, SecondEmojis, type }) => {
  const food = useSelector(state => state.cook.food);
  const tool = useSelector(state => state.cook.tool);
  const dispatch = useDispatch();

  const wraperIcons = (icons) => {
    if (!icons || icons.length === 0) { return "" };
    return icons.map(icon => (icon.emoji ? icon.emoji : <img key={icon.icon} src={process.env.PUBLIC_URL + "/assets/" + icon.icon} alt={icon.name} />))
  }

  const wrapperStyle = (style = type) => {
    return "btn__item " + (style === "vegetable"
      ? "btn__vege"
      : style === "meat"
        ? "btn__meat"
        : style === "staple"
          ? "btn__staple"
          : style === "tools"
            ? "btn__default"
            : "btn__recipe") + (isAdd(food, name) || tool === name ? " active" : "");
  }

  const isAdd = (arr, target) => {
    return arr.findIndex(f => f === target) >= 0;
  }

  const handleClick = () => {
    if (type !== "tools") {
      dispatch(toggleFood(name));
    } else {
      dispatch(selectTool(name));
    }
  }

  return (
    <button className={wrapperStyle()} onClick={handleClick}>
      <span>{wraperIcons(FirstEmojis)}</span>
      <span>{name}</span>
      <span>{wraperIcons(SecondEmojis)}</span>
    </button>
  )
}

export default Item;