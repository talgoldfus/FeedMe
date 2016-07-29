
  function searchReceipes() {
    const url = "http://food2fork.com/api/search?key="
    const key = "e642ca2fb63e3b42445e7c2acf799fa8"

    var input = $('#searchedIngredients').val()
      $.ajax({
        method: "GET",
        url: url + key + "&q=" + input + "&count=6"
      }).done((response)=>{
        var searched_recipes= response.recipes.map(r=> r.recipe_id)

      })

  }


  function getRecipe() {

  }
//
//
//
//   "recipes": [
//       {
//         "publisher": "Closet Cooking",
//         "f2f_url": "http://food2fork.com/view/35169",
//         "title": "Buffalo Chicken Chowder",
//         "source_url": "http://www.closetcooking.com/2011/11/buffalo-chicken-chowder.html",
//         "recipe_id": "35169",
//         "image_url": "http://static.food2fork.com/Buffalo2BChicken2BChowder2B5002B0075c131caa8.jpg",
//         "social_rank": 100,
//         "publisher_url": "http://closetcooking.com"
//       },
//
//
//
//       {
//   "recipe": {
//     "publisher": "Closet Cooking",
//     "f2f_url": "http://food2fork.com/view/35169",
//     "ingredients": [
//       "2 tablespoons butter",
//       "1 pound chicken, cut into bite sized pieces",
//       "1 onion, diced",
//       "2 carrots, diced",
//       "2 stalks celery, diced",
//       "2 cloves garlic, chopped",
//       "1/4 cup flour (rice flour for gluten free)",
//       "3 cups chicken stock",
//       "hot sauce to taste (I used 1/4 cup Franks Red Hot sauce)",
//       "1 large yukon gold or other boiling potato, peeled and cut into bite sized pieces",
//       "salt and pepper to taste",
//       "1 cup heavy cream",
//       "1/4 cup blue cheese, crumbled\n"
//     ],
//     "source_url": "http://www.closetcooking.com/2011/11/buffalo-chicken-chowder.html",
//     "recipe_id": "35169",
//     "image_url": "http://static.food2fork.com/Buffalo2BChicken2BChowder2B5002B0075c131caa8.jpg",
//     "social_rank": 100,
//     "publisher_url": "http://closetcooking.com",
//     "title": "Buffalo Chicken Chowder"
//   }
// }
