import "./GotoRecipe.css";

const GotoRecipe = () => {
    return (
        <div className="RecipeIcon" onClick={() => document.querySelector("#recipe").scrollIntoView({ behavior: "smooth" })}>
            <img src={process.env.PUBLIC_URL + "/assets/bowl.svg"} alt="recipe" />
        </div>
    )
}

export default GotoRecipe;