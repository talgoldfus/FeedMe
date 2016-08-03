const RecipeDetail = (function RecipeDetail() {
        var counter = 0

        return class {

            constructor(apiId, name, image, source, ingredientLines, totalTime, numberOfServings, rating, nutritionEstimates //need to fill those in
            ) {
                this.id = counter++
                    this.apiId = apiId
                this.name = name
                this.image = this.changeImage(image)
                this.source = source
                this.ingredientLines = ingredientLines
                this.highlighted = this.highlightIngredient()
                this.totalTime = totalTime
                this.numberOfServings = numberOfServings
                this.rating = rating
                this.nutritionEstimates = nutritionEstimates
                store.recipesDetail.push(this)
            }

            changeImage(image) {
                var arr = image.split("")
                arr[arr.length - 1] = "0"
                arr[arr.length - 2] = "0"
                arr[arr.length - 3] = "5"
                return arr.join("")
            }

            caloryCount() {
                let calCount = 0
                this.nutritionEstimates.forEach((nutir) => {
                    if (nutir.value) {
                        calCount += nutir.value
                    }
                })
                return calCount
            }

            highlightIngredient() {
                let input = store.searchString[store.searchString.length - 1].split(" ")
                let result = []
                this.ingredientLines.forEach((ingredient) => {
                    let currentIngredient = ingredient
                    input.forEach((inputWord) => {
                        if (currentIngredient.toLowerCase().includes(inputWord.toLowerCase()) && result.includes(currentIngredient) === false) {
                            result.push(`<mark>${currentIngredient}</mark><span class="glyphicon glyphicon-ok" aria-hidden="true"></span>`)
                        } else if (result.includes(currentIngredient) === false && result.includes(`<mark>${currentIngredient}</mark><span class="glyphicon glyphicon-ok" aria-hidden="true"></span>`) === false) {
                            result.push(currentIngredient)
                        }
                    })
                })
                return result
            }


            static find(id) {
                return store.recipesDetail.filter((element) => {
                    return id === element.id
                })[0]
            }


            static findByIpId(apiId) {
                return store.recipesDetail.filter((element) => {
                    return apiId === element.apiId
                })[0]
            }

        }
    }
    ())
