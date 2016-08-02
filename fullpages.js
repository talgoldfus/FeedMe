/**
 * Created by Sven on 8/1/16.
 */
$(document).ready(function() {
  $('#fullpage').fullpage( {
    anchors: ['recipeSearch', 'timeSelect', 'recipeIndex', 'individualRecipes' ],
  });

  $('#header').headroom();
  
  Handlebars.registerHelper("inc", function(value, options)
  {
      return parseInt(value) + 1;
  });
});
