function cooktimeTemplate(){
  let template = `<div id="display-cooktime">
    <h1>How much time you have to cook? </h1>
    <div class="" >
      {{#each recipeProfiles}}
        <a href="#" onclick="showProfiles(this);return false;" data-cookingTime = {{times}}><h1>{{range}}</h1></a>
      {{/each}}
     </div>
  </div>`
  return template
}

function profileTemplate(){
template = `
  <div id="display-profile">
    <p>Here are your recipes! </p>
      {{#each recipeProfiles}}
      <div id={{api_id}}>
        <h4>{{recipeName}}</h4>
        <h5>{{sourceDisplayName}}</h5>
        <h6>{{ingredients}}</h6>
        <img src = {{profile_image}}>
        <a href="#" onclick="getFullDetails(this);return false;" data-recipeid={{api_id}}><p>See full detials</p></a>
      </div>
      {{/each}}
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
function fullDetailsTemplate(){
  template = `<div id="detail-recipe">
      <p>Here is your full recipe! </p>
      <div>
        <h2>{{recipeDetail.name}} </h2>
        <h2>{{recipeDetail.source.sourceDisplayName}}</h2>
        <img src = {{recipeDetail.image}}>
        <a href="{{recipeDetail.source.sourceRecipeUrl}}"> <p> See Full Recipe </p> </a>
      </div>
    </div>

      `
  return template
}
