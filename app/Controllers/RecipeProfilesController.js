

function searchRecipes(){
  populateSearch().then(
      ()=>{
        $('#searchedIngredients').val("")
        showTimes()
      }
    )
}

function showProfiles(element){


  var source   = $("#profile-template").html();
  var template = Handlebars.compile(source)
  var context = {recipeProfiles: RecipeProfile.filterByRange(parseInt(element.dataset["cookingtime"]))}
  var html   = template(context)

  $('#displayProfiles').append(html)

}

function CreateProfiles(){
   store.search.forEach( (element) => {
     if (element.totalTimeInSeconds){
       new RecipeProfile (element.recipeName, element.flavors, element.ingredients, element.id, element.sourceDisplayName, element.totalTimeInSeconds, element.smallImageUrls[0])
     }
   })
}

function showTimes(){
  var source   = $("#cooktime-template").html();
  var template = Handlebars.compile(source)
  var context = {recipeProfiles: RecipeProfile.cookingTimesString()}
  var html   = template(context)

  $('#displayTimes').append(html)
}
