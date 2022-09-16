import { useDispatch } from "react-redux";
import CookChoice from "./Choice";
import data from "../../data/food";
import "./Choices.css";
import { removeAlll } from "../../redux/cookReducer";

const CookChoices = () => {
    const dispatch = useDispatch();

    const handleClear = () => {
        dispatch(removeAlll());
    }

    return (
        <section className="Choices__container">
            <h1>选择一下食材</h1>
            <button className="btn__item" onClick={handleClear}>Clear</button>
            {
                data.map(f => <CookChoice key={f.name} food={f} />)
            }
        </section>
    );
}

export default CookChoices;