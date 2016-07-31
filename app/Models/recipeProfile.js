
const RecipeProfile = (function RecipeProfile (){
  var counter = 0

  return class  {
    constructor(recipeName,flavors,ingredients,api_id,sourceDisplayName,totalTimeInSeconds,profile_image) {
        this.id= counter++
        this.recipeName=recipeName
        this.flavors = flavors //object
        this.ingredients=ingredients //object
        this.api_id= api_id
        this.sourceDisplayName = sourceDisplayName
        this.totalTimeInSeconds = totalTimeInSeconds
        this.profile_image = profile_image

        store.recipeProfiles.push(this)
      }

      static find(id){
        return store.recipeProfiles.filter( id => id===this.id )[0]
      }



      static cookingTimesRange(){
        var times =  store.recipeProfiles.map( (element) => {
          return element.totalTimeInSeconds
        })

        var max= Math.max(...times)
        var min = Math.min(...times)
        var sum = times.reduce((x, y) => x += y);
        var avg = sum / times.length;
        return [min, parseInt(avg), max]
      }
  }


  }
  ())
