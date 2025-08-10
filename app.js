const loadDate = (search)=>{
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    .then(res=>res.json())
    .then(data=>{
       displayMeal(data.meals);
    })
}
const btn = document.getElementById('search_btn');
btn.addEventListener('click',(e)=>{

    loadDate(document.getElementById('search_box').value);
    document.getElementById('meal_container').innerText="";
    document.getElementById('more_details').innerText="";
    document.getElementById('more_details').style.display="none";
    document.getElementById('search_box').value ='';
})
loadDate('');
const displayMeal = (meals)=>{
    const mealsContainer = document.getElementById('meal_container');
    if(!meals){
        mealsContainer.innerHTML =`
            <h2 class="no_data_found">No Data Found!</h2>
        `;
        return
    }
    meals.forEach(meal=>{
        const div = document.createElement('div');
        div.classList.add('card');
        div.id = "card";
        div.addEventListener('click',(e)=>loadDetails(meal.idMeal));
        div.innerHTML=`
            <img class="card_img" src="${meal.strMealThumb}"/>
            <h2>${meal.strMeal}</h2>
        `;
        mealsContainer.appendChild(div);
    })
}

const loadDetails = (id)=>{
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(res=>res.json())
    .then(data=>{
        displayDetails(data.meals[0]);
    })
}
const displayDetails = (meal)=>{
    const moreDetailsContainer = document.getElementById('more_details');
    moreDetailsContainer.style.display='block';
    moreDetailsContainer.innerHTML=`
        <img class="details_img" src="${meal.strMealThumb}"/>
        <div class="title_and_price">
            <b>${meal.strMeal}</b>
            <b>Price:${meal.idMeal.slice(0,3)-100}</b>
        </div>
        <p class="more_info">${meal.strInstructions.slice(0,300)}</p>
        <a class="how_to_make_btn" href="${meal.strYoutube}" target="_blank">How To Make </a>
    `;
}