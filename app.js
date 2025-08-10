const loadDate = (search)=>{
    console.log(search);
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    .then(res=>res.json())
    .then(data=>{
       displayMeal(data.meals);
    })
}
const btn = document.getElementById('search_btn');
btn.addEventListener('click',(e)=>{
    loadDate(document.getElementById('search_box').value);
    document.getElementById('search_box').value ='';
})

const displayMeal = (meals)=>{
    console.log(meals);
    
}