import { getData } from "./data.js";

const URL = "https://www.themealdb.com/api/json/v1/1/";
const CATEGORIES = "categories.php";
const FILTER_CATEGORY = "filter.php?c=";

const $containerCards = document.getElementById("container-cards-categories");


(async ()=>{
    const data = await getData(URL+CATEGORIES)
    showCategories(data)
})();



$containerCards.addEventListener("click", (e)=>{

    if(e.target.classList.contains("card-link")){
        const $container = e.target.parentNode.parentNode
        const $title = $container.querySelector(".card-title")
        showMeals($title.textContent)
    }
   
})


async function showMeals(category){
    const $containerMeals = document.getElementById("container-cards-meals");
    $containerMeals.innerHTML = ""
    const $template = document.getElementById("card-meals").content;
    const $fragment = document.createDocumentFragment();

    const data = await getData(URL+FILTER_CATEGORY+category)
    console.log(data);


    data.meals.forEach((meal) =>{
        console.log($containerMeals);
        const $nameRecipe = $template.querySelector(".card-title");
        $nameRecipe.textContent = meal.strMeal;

        const $imgMeal = $template.querySelector(".card-img-top");  
        $imgMeal.src = meal.strMealThumb;

        const $category = document.querySelector(".name-category")
        $category.textContent = category

        const clone = $template.cloneNode(true);
        $fragment.appendChild(clone)

    })
    $containerMeals.appendChild($fragment)
}




function showCategories(data){
    console.log(data)
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


