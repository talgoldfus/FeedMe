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
      <div data-recipeId={{api_id}} >
        <h4>{{recipeName}}</h4>
        <h5>{{sourceDisplayName}}</h5>
        <h6>{{ingredients}}</h6>
        <img src = {{profile_image}}>
      </div>
      {{/each}}
  </div>
    `
return template
}
