
const RecipeDetail = ( function RecipeDetail(){
  var counter = 0

  return class  {

    constructor(  //need to fill those in
    ) {
        this.id= counter++
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
