
const RecipeDetail = ( function RecipeDetail(){
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
        store.recipesDetail.push(this)
      }

      static find(id){
          return store.recipesDetail.filter((element)=>{
          return id === element.id })[0]
      }


      static findByIpId(api_id){
          return store.recipesDetail.filter((element)=>{
          return id === element.api_id })[0]
      }


  }}
  ())
