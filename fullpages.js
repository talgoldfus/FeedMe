/**
 * Created by Sven on 8/1/16.
 */

function loadfullPage(){
  $('#fullpage').fullpage( {
    fitToSection:false,
    anchors: ['recipeSearch', 'timeSelect', 'recipeIndex', 'individualRecipes'],
    onLeave: function(index, nextIndex, direction){
      if(index == 1 && direction =='down'){
        $('header').slideUp()

      }
      else if(index == 2 && direction == 'up'){
        $('header').slideDown();
      }
    }
  });
}

$(document).ready(function() {
  loadfullPage()
  Handlebars.registerHelper("inc", function(value, options)
  {
      return parseInt(value) + 1;
  });
});
