function cooktimeTemplate(){
  let template = `<div id="display-cooktime" class="row text-center">
    <h1>How much time you have to cook? </h1>

      {{#each recipeProfiles}}
      <div class="col-md-4">
        <a href="#" onclick="showProfiles(this);return false;" data-cookingTime = {{times}}><h1>{{range}}</h1></a>
         </div>
      {{/each}}

  </div>`
  return template
}

function profileTemplate(){
template = `
  <div id="display-profile" class="text-center">
    <!--<h1>Here are your recipes! </h1>-->
      {{#each recipeProfiles}}

        <div id={{api_id}} class="col-md-4 text-center clearfix">
          <div class="thumbnail">
          <img src={{profile_image}}>
          <div class="caption  text-left">
          <h4>{{recipeName}}</h4>
          <h5>{{sourceDisplayName}}</h5>
          <!--<h6>{{ingredients}}</h6>-->
          <p><a class="btn btn-default" onclick="$.fn.fullpage.moveTo(4,'slide{{api_id}}');" data-recipeid={{api_id}}>See More</a></p>
          </div>
        </div>
        </div>
      {{/each}}
  </div>
    `


return template
}


function fullDetailsTemplate(){

  template = `
  <div>
  <div class="slide jumbotron text-center" data-anchor="slide{{recipeDetail.apiId}}">
        <img src = {{recipeDetail.image}}>
          <h2>{{recipeDetail.name}} </h2>
          <a class="btn btn-default" href="{{recipeDetail.source.sourceRecipeUrl}}"> <p> See Full Recipe </p> </a>
  </div>
  </div>

      `
  return template
}




// this.id= counter++
// this.apiId = apiId
// this.name = name
// this.image = image  //images[0].hostedLargeUrl
// this.source = source
// this.ingredientLines = ingredientLines
// this.totalTime = totalTime
// this.numberOfServings = numberOfServings
// this.rating = rating
