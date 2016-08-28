const store = {searchString:[], profileSearch:[], recipeProfiles:[], detailSearch:[] ,recipesDetail:[]}
const app_id= "a6ffa6ec"
const app_key= "eb77ee9a7627c1689e7351f1630b4c4e"

  function populateSearch() {
    let url= "http://api.yummly.com/v1/api/recipes?"
    var input = $('#searchedIngredients').val()
    store.searchString.push(input)

  return jQuery.ajax({
      url:url,
      data:{_app_id:app_id, _app_key:app_key,q:input,requirePictures:"true",maxResult:15},
      dataType:'jsonp'}
    ).done((response)=>{
      store.profileSearch = response.matches
      createProfiles()
    })

}

function getRecipe(id) {
    let url= "http://api.yummly.com/v1/api/recipe/"

return jQuery.ajax({
    url:url + id,
    data:{_app_id:app_id, _app_key:app_key},
    dataType:'jsonp'}
  ) .done((response)=>{
    store.detailSearch.push(response)
    // this will call on the method that will create new instances of the RecipeDetail class
    createFullDetail()
  })

}
