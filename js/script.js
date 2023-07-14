import { getData } from "./data.js";

const URL = "https://www.themealdb.com/api/json/v1/1/";
const CATEGORIES = "categories.php";

const $containerCards = document.getElementById("container-cards");


(async ()=>{
    const data = await getData(URL+CATEGORIES)
    drawCategories(data)
})();    


$containerCards.addEventListener("click", (e)=>{

    if(e.target.classList.contains("card-link")){

    }
   
})


function drawCategories(data){
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


