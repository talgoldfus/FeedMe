
const RecipeProfile = (function RecipeProfile (){
  var counter = 0

  return class  {
    constructor(recipeName,flavors,ingredients,api_id,sourceDisplayName,totalTimeInSeconds,profile_image) {
        this.id= counter++
        this.recipeName=recipeName
        this.flavors = flavors //object
        this.ingredients=ingredients 
        this.api_id= api_id
        this.sourceDisplayName = sourceDisplayName
        this.totalTimeInSeconds = totalTimeInSeconds
        this.profile_image = profile_image
        store.recipeProfiles.push(this)
      }

      static find(id){
          return store.recipeProfiles.filter((element)=>{
          return id === element.id })[0]
      }

      static times(){
        return  store.recipeProfiles.map( (element) => {
          return element.totalTimeInSeconds
        })
      }

      static cookingTimesString(){
          var times = this.cookingTimesRange()
          var min = `Up to ${times[0]/60} minutes.`
          var avg = `${times[0]/60} to ${parseInt(times[1]/60)} minutes.`
          var max = `${parseInt(times[1]/60)} to ${times[2]/60} minutes.`
          return [{range: min, times: times[0]}, {range: avg, times: times[1]}, {range: max, times: times[2]}]
      }

      static cookingTimesRange(){
        var times = this.times()
        var max= Math.max(...times)
        var min = Math.min(...times)
        var sum = times.reduce((x, y) => x += y);
        var avg = sum / times.length;
        return [min, parseInt(avg), max]
      }

      static filterByRange(range,quantity){
        return store.recipeProfiles.filter((object) => {
          return object.totalTimeInSeconds <= range
        }).slice(0,quantity)
      }
  }


  }
  ())
