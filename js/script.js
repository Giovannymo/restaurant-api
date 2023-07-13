import { getData } from "./data.js";

const URL = "https://www.themealdb.com/api/json/v1/1/";
const CATEGORIES = "categories.php";
const FILTER_CATEGORY = "filter.php?c=";

const $containerCards = document.getElementById("container-cards");


(async ()=>{
    const data = await getData(URL+CATEGORIES)
<<<<<<< HEAD
    drawCategories(data)
})();    
=======
    showCategories(data)
})();
>>>>>>> 2a2c552 (Fetch meals and template html)

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

$containerCards.addEventListener("click", (e)=>{

    if(e.target.classList.contains("card-link")){

    }
   
})






function showCategories(data){
    console.log(data)
<<<<<<< HEAD
=======
    const $containerCards = document.getElementById("container-cards-categories");
>>>>>>> 2a2c552 (Fetch meals and template html)
    const $fragment = document.createDocumentFragment();
    const $template = document.getElementById("card-category").content;

    data.categories.forEach( category => {
        
        const $imgCategory = $template.querySelector(".card-img-top");
        $imgCategory.src = category.strCategoryThumb;
        const $titleCategory = $template.querySelector(".card-title");
        $titleCategory.textContent = category.strCategory;
        const $descriptionCategory = $template.querySelector(".card-text");
        $descriptionCategory.textContent = category.strCategoryDescription;



        const $clone = $template.cloneNode(true);
        $fragment.appendChild($clone);

    });    

    $containerCards.appendChild($fragment)
    


}    


