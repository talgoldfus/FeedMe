function getFullDetails(recipe_api_id){
  // search to see if the API request is already in the database

  let recipe = RecipeDetail.findByIpId(recipe_api_id)
  if(recipe){
    //if recipe already got pulled from the api just render the view
    showFullDetails(recipe)
  }
  else{

    // Make a get request to the api , create a new instance of the RecipeDetail class and render the view

    getRecipe(recipe_api_id).then(()=>{
      let recipe = RecipeDetail.findByIpId(recipe_api_id)

    //  element.dataset.recipeid
      showFullDetails(recipe)}
      )
    }
}


function showFullDetails(recipe){
  var source   = fullDetailsTemplate(); //  <--- need to create this template
  var template = Handlebars.compile(source)
  var context = {recipeDetail: recipe }
  var html   = template(context)
  $(`#displayRecipe`).after(html)
}




function createFullDetail(){
   let recipe= store.detailSearch[store.detailSearch.length - 1]
  // need to create a new  RecipeDetail with the relavent details

   new RecipeDetail (recipe.id, recipe.name, recipe.images[0].hostedLargeUrl, recipe.source, recipe.ingredientLines, recipe.totalTime, recipe.numberOfServings, recipe.rating)


}
