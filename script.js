var YOUR_APP_ID = `483abd96`;
var YOUR_APP_KEY = `2cd1cda17433b2c5e27c16f83ae475e4`;
var edumam = `https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`;

async function recepieApi(dish){
    try{
    let appUrl = await fetch(`https://api.edamam.com/search?q=${dish}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`);
    let appProcess = await appUrl.json();
    console.log(appProcess);
   return(appProcess);
    }catch(err){
        console.log(err);
    }
}


 function searchBar(){
    var searchIo = document.getElementById('search');

   
    searchIo.addEventListener('click',function(){
               
          let searchDish = document.getElementById('searchdish').value;       
          recepieApi(searchDish).then((data)=>{
                for(let i=0; i<data.hits.length; i++){
                    recipeList(data.hits[i])
                }
          
          });
         
   })
   
}
searchBar(); 

var container = document.getElementById('container');
    
   
var row = createClass('div','row no-gutters');


function recipeList(pasi){
    


    let colImg = createClass('div','col-md-3 m-2');
    let card = createClass('div','card col-md-3 m-4');
    let img = createClass('img','card-img img-fluid');
    img.setAttribute('src',`${pasi.recipe.image}`);

   // let coltexts = createClass('div','col-md-8');
    let cardBody = createClass('div','card-body');
    cardBody.setAttribute('style','background-image: url(378.jpg)');
    let ultexts = createClass('ul','list-group list-group-flush');
    let h5 = createClass('li','list-group-item text-uppercase');
    h5.innerHTML = pasi.recipe.label;
    let title1 = createClass('li','list-group-item');
    title1.innerHTML = pasi.recipe.ingredientLines;
    let title2 = createClass('li','list-group-item');
    title2.innerHTML = `<p>Calories : ${pasi.recipe.calories.toFixed(2)}</p>`;
    let title = createClass('li','list-group-item');
    title.innerHTML = pasi.recipe.healthLabels;
    let title3 = createClass('li','list-group-item');
    title3.innerHTML = pasi.recipe.totalDaily.TOCPHA.label;
    let abs = createClass('li','list-group-item text-justify');
    abs.innerHTML = pasi.recipe.totalNutrients.CA.label;
    let link = createClass('a','list-group-item text-justify');
    link.setAttribute('a','text-center');
    link.innerText = 'Know More';
    link.setAttribute('href',`${pasi.recipe.url}`) 


    cardBody.append(ultexts,h5,title1,title2,title,title3,abs,link);
    //coltexts.append(cardBody);
    card.append(img,cardBody);
    //colImg.append(card);
    row.append(card);

    container.append(row)
    
    document.body.append(container);

} 

function createClass(elem,elemClass=''){
    let element = document.createElement(elem);
    element.setAttribute('class',elemClass);
    return element;
}


