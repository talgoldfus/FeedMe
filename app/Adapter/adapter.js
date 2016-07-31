const store = {search:[], recipe_profiles:[],recipes:[]}

  function searchReceipes() {

  

    var input = $('#searchedIngredients').val()

    $.ajax({
      url:url,
      data:{_app_id:app_id, _app_key:app_key,q:input,requirePictures:"true",maxResult:50},
      dataType:'jsonp'}
    ) .done((response)=>{
      store.data = response.matches
    })
}


function showRecipe(id) {
    var url= "http://api.yummly.com/v1/api/recipe/"

  $.ajax({
    url:url + id,
    data2:{_app_id:app_id, _app_key:app_key},
    dataType:'jsonp'}
  ) .done((response)=>{
    debugger
    store.data.push(response)
  })

}
