function getFullDetails(element){

  let recipe = RecipeDetail.findByIpId(element.dataset["recipeid"])
  if(recipe){
    showFullDetails(recipe)
  }
  else{
    getRecipe(element.dataset["recipeid"]).then(

        ()=>{debugger}
      )
  }

}


// function showFullDetails(recipe){
//  var source   = fullDetailsTemplate();
//   var template = Handlebars.compile(source)
//   var context = {recipeDetail: recipe }
//   var html   = template(context)
//
// }




function createFullDetail(){
   let recipe= store.detailSearch[store.detailSearch.length - 1]
   debugger
   new RecipeDetail (recipe.id)

}
