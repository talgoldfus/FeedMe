
//constructor(recipeName,flavors,ingredients,api_id,sourceDisplayName,totalTimeInSecond,profile_image
function searchRecipes(){
  populateSearch()
  $('#searchedIngredients').val("")
}

function CreateProfiles(){
   store.search.forEach( (element) => {
     if (element.totalTimeInSeconds){
       new RecipeProfile (element.recipeName, element.flavors, element.ingredients, element.id, element.sourceDisplayName, element.totalTimeInSeconds, element.smallImageUrls[0])
     }
   })
}
