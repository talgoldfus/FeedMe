

function searchRecipes(){
  populateSearch().then(
      ()=>{
        $('#searchedIngredients').val("")
        showTimes()
      }
    )
}

function showProfiles(element){

  var source   = profileTemplate();
  var template = Handlebars.compile(source)
  var context = {recipeProfiles: RecipeProfile.filterByRange(parseInt(element.dataset["cookingtime"]),6)}
  var html   = template(context)
  $('#displayProfiles').empty()
  $('#displayProfiles').append(html)

}

function createProfiles(){
   store.profileSearch.forEach( (element) => {
     if (element.totalTimeInSeconds){
       new RecipeProfile (element.recipeName, element.flavors, element.ingredients, element.id, element.sourceDisplayName, element.totalTimeInSeconds, element.smallImageUrls[0])
     }
   })
}

function showTimes(){
  var source   = cooktimeTemplate();
  var template = Handlebars.compile(source)
  var context = {recipeProfiles: RecipeProfile.cookingTimesString()}
  var html   = template(context)
  $('#displayTimes').empty()
  $('#displayTimes').append(html)
}
