
const RecipeDetail = ( function RecipeDetail(){
  var counter = 0

  return class  {

    constructor(apiId, name, image, source, ingredientLines, totalTime, numberOfServings, rating, nutritionEstimates //need to fill those in
    ) {
        
        this.id= counter++
        this.apiId = apiId
        this.name = name
        this.image = image  //images[0].hostedLargeUrl
        this.source = source
        this.ingredientLines = ingredientLines
        this.totalTime = totalTime
        this.numberOfServings = numberOfServings
        this.rating = rating
        this.nutritionEstimates = nutritionEstimates
        
        store.recipesDetail.push(this)
      }

      caloryCount(){
        let calCount = 0 
        this.nutritionEstimates.forEach((nutir) => {
          if (nutir.value){
              calCount+=nutir.value
          }
         })
        return calCount   
      }

      static find(id){
          return store.recipesDetail.filter((element)=>{
          return id === element.id })[0]
      }


      static findByIpId(apiId){
          return store.recipesDetail.filter((element)=>{
          return apiId === element.apiId })[0]
      }


  }}
  ())
