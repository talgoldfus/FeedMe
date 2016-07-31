
const RecipeProfiles = (function RecipeProfiles (){
  var count = 0

  return class  {
    constructor(recipeName,flavors,ingredients,api_id,sourceDisplayName,totalTimeInSecond,profile_image) {
        this.id= counter++
        this.recipeName=recipeName
        this.flavors = flavors //object
        this.ingredients=ingredients //object
        this.api_id= api_id
        this.sourceDisplayName = sourceDisplayName
        this.totalTimeInSeconds = totalTimeInSeconds
        this.profile_image = profile_image
      }
  }


  }
  ())
