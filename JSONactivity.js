fetch("https://api.punkapi.com/v2/beers/random")
.then((response) => {
    // const jsonResponse = response.json()
    return response.json()
})
.then((json) => {
const  drinkContainer = document.getElementById("drink-container")

json.forEach((drink) => {
    const headerTag = document.createElement ("h1")
    const textTag = document.createElement ("p")
    const imageTag = document.createElement ("img")
    headerTag.innerText = `${drink.name}`
    textTag.innerText = `${drink.description}`
    imageTag.src=drink.image_url
    drinkContainer.appendChild(headerTag)
    drinkContainer.appendChild(textTag)
    drinkContainer.appendChild(imageTag)
    headerTag.classList.add ("h1")
    textTag.classList.add ("img")
})
})
.catch((error) => {
    console.log (error)
})