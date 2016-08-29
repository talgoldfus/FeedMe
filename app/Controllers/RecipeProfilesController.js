function searchRecipes() {
    store.profileSearch = []
    store.recipeProfiles = []
    //Grab information from the API via the adapter functions
    populateSearch().then(
        () => {
            $('#searchedIngredients').val("")
            //Render the cooking times view and moves down to the appropriate ancor.
            showTimes()
            $.fn.fullpage.moveTo(2);
        }
    )
}

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

function showProfiles(element) {
    //clears the full detail slides section
    $(`#displayRecipe`).nextAll().remove()

    //Filters the recipes acording to the selected time frame by the user via the Recipe Profile class method
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
<<<<<<< HEAD

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
=======
>>>>>>> master
