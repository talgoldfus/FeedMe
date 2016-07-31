const store = {search:[], recipeProfiles:[],recipes:[]}
const app_id= "a6ffa6ec"
const app_key= "eb77ee9a7627c1689e7351f1630b4c4e"

  function populateSearch() {
    var url= "http://api.yummly.com/v1/api/recipes?"
    var input = $('#searchedIngredients').val()

    $.ajax({
      url:url,
      data:{_app_id:app_id, _app_key:app_key,q:input,requirePictures:"true",maxResult:50},
      dataType:'jsonp'}
    ).done((response)=>{
      store.search = response.matches
      CreateProfiles()
    })
}


function showRecipe(id) {
    var url= "http://api.yummly.com/v1/api/recipe/"

  $.ajax({
    url:url + id,
    data2:{_app_id:app_id, _app_key:app_key},
    dataType:'jsonp'}
  ) .done((response)=>{

    store.data.push(response)
  })

}
