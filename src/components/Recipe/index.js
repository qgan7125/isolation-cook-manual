import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import papaparse from "papaparse";
import dataChoices from "../../data/food";
import allRecipes from "../../data/recipe.csv";
import "./Recipe.css";
import Item from "../item";

const filterRecipe = (data, food, tool, similar) => {
    const len = food.length;
    const currData = data?.filter(d => {
        if (tool !== "") {
            return d[6] === tool;
        }
        return true;
    })

    if (len === 0) { return currData }

    return currData?.filter(d => {
        const currRecipe = d[1].split("、");
        const intersection = currRecipe.filter(f => food.includes(f));
        return similar ? intersection.length === len : Math.floor(len * 0.2) < intersection.length && intersection.length <= len;
    });
}

const Recipe = () => {
    const [data, setData] = useState();
    const [recipes, setRecipes] = useState([]);
    const [similar, setSimilar] = useState(false);
    const tool = useSelector(state => state.cook.tool);
    const food = useSelector(state => state.cook.food);

    useEffect(() => {
        papaparse.parse(allRecipes, {
            download: true,
            complete: (input) => {
                setData(input.data);
            }
        });
    }, [])

    useEffect(() => {

        if (tool.length > 0 || food.length > 0) {
            const matchedRecipes = filterRecipe(data?.slice(1), food, tool, similar);
            setRecipes(matchedRecipes);
        } else {
            setRecipes([]);
        }
    }, [data, tool, food, similar])

    const tools = dataChoices.slice(dataChoices.length - 1)[0]['items'];
    const foodAll = dataChoices.slice(0, 3).map(f => f.items).flat();

    const itemsProps = (r, i) => ({
        key: r[0] + i,
        name: r[0],
        FirstEmojis: foodAll.filter(f => r[1].split("、").includes(f.name)),
        SecondEmojis: tools.filter(t => t.name === tool)
    })

    return (
        <section id="recipe">
            <h2>🍲来看看组合出的菜谱！</h2>
            <div className="match__btn-group">
                <button className={"btn__match" + (!similar ? " active" : "")} onClick={() => setSimilar(false)}>模糊匹配</button>
                <button className={"btn__match" + (similar ? " active" : "")} onClick={() => setSimilar(true)}>严格匹配</button>
            </div>
            <div className="recipe__container">
                {
                    recipes?.map((r, i) => (
                        <Item {...itemsProps(r, i)} />
                    ))
                }
            </div>
        </section>
    )
}

export default Recipe;