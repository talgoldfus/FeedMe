function cooktimeTemplate(){
  let template = `<div id="display-cooktime" class="row text-center">
    <h1>How much time you have to cook? </h1>
    <br>
    <div class="row">
      {{#each recipeProfiles}}
      <div class="col-md-4">
        <button type="button" class="btn btn-default">
          <div class="col-md-4">
            <a href="#" onclick="showProfiles(this);return false;" data-cookingTime = {{times}}><h1>{{range}}</h1></a>
             </div>
          </button>
      </div>
      {{/each}}
    </div>
  </div>`
  return template
}

function profileTemplate(){
template = `
  <div id="display-profile" class="text-center">
    <!--<h1>Here are your recipes! </h1>-->
      {{#each recipeProfiles}}

        <div id={{api_id}} class="col-md-4 text-center clearfix profile">
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
      <div class="slide row text-center " data-anchor="slide{{recipeDetail.apiId}}">
      <div class="col-md-10 col-md-offset-1 ">
        <div class="panel panel-default">

        <div class="panel-heading">
            <h2>{{recipeDetail.name}} </h2>
        </div>
      <div class="panel-body">
        <div class="row text-center">
            <div class="col-md-8 text-center">
              <img src = {{recipeDetail.image}}>
            </div>
            <div class="col-md-4 text-left clearfix">
            <h2>Ingredients:</h2>
              <ul>
                {{#each recipeDetail.highlighted}}
                  <li><h5>{{{this}}}</h5></li>
                {{/each}}
              </ul>
              <br>
              <h3>Cooking Time: {{recipeDetail.totalTime}}</h3>
            </div>
        </div>
            <br>
          <div class="row text-center">
            <div class="col-md-12 ">
              <a class="btn btn-default" id="seeMore" href="{{recipeDetail.source.sourceRecipeUrl}}"> <h4> See Full Recipe </h4> </a>
            </div>
          </div>

        </div>
        <div>
      </div>

  </div>

      `
  return template
}
