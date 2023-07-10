import { getData } from "./data.js";

const URL = "https://www.themealdb.com/api/json/v1/1/";
const CATEGORIES = "categories.php";

(async ()=>{
    const data = await getData(URL+CATEGORIES)
    drawCategories(data)
})();



function drawCategories(data){
    console.log(data)
    const $containerCards = document.getElementById("container-cards");
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