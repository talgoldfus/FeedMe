function cooktimeTemplate(){
  let template = `<div id="display-cooktime" class="row">
    <h1>How much time you have to cook? </h1>
    <div class="col-md-4">
      {{#each recipeProfiles}}
        <a href="#" onclick="showProfiles(this);return false;" data-cookingTime = {{times}}><h1>{{range}}</h1></a>
      {{/each}}
     </div>
  </div>`
  return template
}

function profileTemplate(){
template = `
  <div id="display-profile" class="row">
    <p>Here are your recipes! </p>
      {{#each recipeProfiles}}
      <div id={{api_id}} class="col-md-4">
        <h4>{{recipeName}}</h4>
        <img src={{profile_image}}>
        <h5>{{sourceDisplayName}}</h5>
        <h6>{{ingredients}}</h6>
        <a href="#" onclick="getFullDetails(this);return false;" data-recipeid={{api_id}}><p>See full details</p></a>
      </div>
      {{/each}}
  </div>
    `
return template
}


function fullDetailsTemplate(){
  template = `<div id="detail-recipe" class="container">
      <div>
        <h2>{{recipeDetail.name}} </h2>
        <img src = {{recipeDetail.image}}>        
        <a href="{{recipeDetail.source.sourceRecipeUrl}}"> <p> See Full Recipe </p> </a>
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
