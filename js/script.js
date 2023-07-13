import { getData } from "./data.js";

const URL = "https://www.themealdb.com/api/json/v1/1/";
const CATEGORIES = "categories.php";
const FILTER_CATEGORY = "filter.php?c=";

(async ()=>{
    const data = await getData(URL+CATEGORIES)
    showCategories(data)
})();

async function instructionsMeal(id){
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i="+id);
    const data = await response.json();
    return data
}

function showMeals(data){
    const $containerMeals = document.getElementById("container-cards-meals")
    const $template = document.getElementById("card-meals").content;
    const $fragment = document.createDocumentFragment();

    
    data.forEach(async (meal) =>{
        const $nameRecipe = $template.querySelector("card-title");
        $nameRecipe.textContent = meal.strMeal;

        const $imgMeal = $template.querySelector(".card-img-top");

        $imgMeal.src = meal.strMealThumb;

        const instructions = await instructionsMeal(meal.idMeal);

    })
}






function showCategories(data){
    console.log(data)
    const $containerCards = document.getElementById("container-cards-categories");
    const $fragment = document.createDocumentFragment();
    const $template = document.getElementById("card-category").content;

    data.categories.forEach( category => {
        
        const $imgCategory = $template.querySelector(".card-img-top")
        $imgCategory.src = category.strCategoryThumb;

        const $clone = $template.cloneNode(true);
        $fragment.appendChild($clone)

    });

    $containerCards.appendChild($fragment)
    


}