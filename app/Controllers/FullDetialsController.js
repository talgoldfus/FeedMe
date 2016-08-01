function getFullDetails(element){
  // search to see if the API request is already in the database
  let recipe = RecipeDetail.findByIpId(element.dataset["recipeid"])
  if(recipe){
    //if recipe already got pulled from the api just render the view
    showFullDetails(recipe)
  }
  else{
    // Make a get request to the api , create a new instance of the RecipeDetail class and render the view
    getRecipe(element.dataset["recipeid"]).then(()=>{
      debugger}
      )
    }
}


function showFullDetails(recipe){
  var source   = fullDetailsTemplate(); //  <--- need to create this template
  var template = Handlebars.compile(source)
  var context = {recipeDetail: recipe }
  var html   = template(context)
  // need to append the rendered info
}




function createFullDetail(){
   let recipe= store.detailSearch[store.detailSearch.length - 1]
   debugger
  // need to create a new  RecipeDetail with the relavent details
   new RecipeDetail (recipe.id)


}
