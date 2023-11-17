fetch("https://api.punkapi.com/v2/beers/random?authuser=0&hl=en")
.then((response) => {
    // const jsonResponse = response.json()
    return response.json()
})
.then((json) => {
const  drinkContainer = document.getElementById("drink-container")

json.forEach((drink) => {
    const headerTag = document.createElement ("h1")
    headerTag.innerText = `${drink.name} ${drink.description} ${drink.img}`
    drinkContainer.appendChild(headerTag)
})
})
.catch((error) => {
    console.log (error)
})