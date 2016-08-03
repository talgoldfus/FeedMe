function searchRecipes() {
    store.profileSearch = []
    store.recipeProfiles = []
    populateSearch().then(
        () => {
            $('#searchedIngredients').val("")
            showTimes()
            $.fn.fullpage.moveTo(2);
        }
    )
}

function showProfiles(element) {

    let collection = RecipeProfile.filterByRange(parseInt(element.dataset["cookingtime"]), 6)
    var getRecipeAndBindItToPromise = function createPromisses(recipe){
      return new Promise((resolve) =>{
          resolve(getFullDetails(recipe.api_id))
       })
    }
    
    var recipePromiseList =collection.map(getRecipeAndBindItToPromise)
    var results = Promise.all(recipePromiseList);

    results.then((recipe_results)=>{
    var source = profileTemplate();
    var template = Handlebars.compile(source)
    var context = {  recipeProfiles: collection}
    var html = template(context)
    $('#displayProfiles').empty()
    $('#displayProfiles').append(html)
    $.fn.fullpage.destroy('all')
    loadfullPage()
    $.fn.fullpage.moveTo(3)
  })

}

// function showProfiles(element) {
//     let collection = RecipeProfile.filterByRange(parseInt(element.dataset["cookingtime"]), 6)
//     // Promise.all([getFullDetails(collection[0].api_id),getFullDetails(collection[1].api_id),getFullDetails(collection[2].api_id)])
//     collection.forEach((recipe) => {
//         getFullDetails(recipe.api_id)
//     })
//
//
//     var source = profileTemplate();
//     var template = Handlebars.compile(source)
//     var context = {
//         recipeProfiles: RecipeProfile.filterByRange(parseInt(element.dataset["cookingtime"]), 6)
//     }
//     var html = template(context)
//     $('#displayProfiles').empty()
//     $('#displayProfiles').append(html)
//
//     setTimeout(
//         function() {
//             $.fn.fullpage.destroy('all')
//             loadfullPage()
//             $.fn.fullpage.moveTo(3);
//         }, 320);
// }


function createProfiles() {
    store.profileSearch.forEach((element) => {
        if (element.totalTimeInSeconds) {
            new RecipeProfile(element.recipeName, element.flavors, element.ingredients, element.id, element.sourceDisplayName, element.totalTimeInSeconds, element.smallImageUrls[0])
        }
    })
}

function showTimes() {
    var source = cooktimeTemplate();
    var template = Handlebars.compile(source)
    var context = {
        recipeProfiles: RecipeProfile.cookingTimesString()
    }
    var html = template(context)
    $('#displayTimes').empty()
    $('#displayTimes').append(html)
}
