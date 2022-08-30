const loadMeal = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
        .then(response => response.json())
        .then(data => displayMeal(data.meals))
}
const displayMeal = meals => {
    const mealContainer = document.getElementById('meal-container');
    mealContainer.innerText = '';
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
        <div class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Meal varieties    ${meal.strArea}</h5>
            <h4 class="card-title">Meal Name <>  ${meal.strMeal}</h4>
            <p class="card-text">This is a longer card with supporting text below as a natural
                lead-in to additional content.</p>
            <p class="card-text">Meal Instructions ${meal.strInstructions.slice(0, 200)}</p>
        </div>
         </div>
`
        console.log(meal)
        mealContainer.appendChild(mealDiv)
    });
}
const searchFood = () => {
    const searchFiled = document.getElementById('search-field');
    const searchText = searchFiled.value;
    loadMeal(searchText)
    searchFiled.value = '';
}
loadMeal('fish')