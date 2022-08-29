// console.log('that\'s so fetch')
// API -- Application Programming Interface or Application Protocol Interface
// API is a piece of software designed to talk to another piece of software -- Defines how your code can talk to the API code
// DATA APIs -- software that is designed to send data over the internet

// https://swapi.dev/api/films/

// window.fetch() to retrive data from our data API url
fetch('https://swapi.dev/api/films/')
    // Promises -- handle asyncronicity in javascript
    // dot then syntax
    .then(responseData => {
        // this cb will not run until the 'promise resolves' (no errors have occured)
        // convert the data payload into json
        // console.log(responseData)
        // returning another promise from this dot then
        return responseData.json()
    })
    .then(jsonData => {
        // console.log(jsonData.results)
        // grab the document body
        const body = document.querySelector('body')
    
        jsonData.results.forEach(result => {
            // make a div
            const div = document.createElement('div')
            // make an h2 for the title
            const h2 = document.createElement('h2')
            h2.innerText = result.title
            // make a p tag for the opening crawl
            const p = document.createElement('p')
            p.innerText = result.opening_crawl
            // console.log(result.title)
            // console.log(result.opening_crawl)
            div.append(h2, p)
            body.append(div)
        })
    })
    // this is where errors from fetch wind up
    .catch(error => {
        console.warn('fetch error:', error)
    })

// fetch().then().then()

// const promise = fetch()
// promise.then()
// function myFetch(url) {
//     // makes request url
//     return new Promise((resolve, reject) => {
//         resolve(the data from SWAPI)
//     })
// }
const redditUrl = 'https://www.reddit.com/search.json?q=kittens'
// step 1 - fetch data
fetch(redditUrl)
    // step 2 - jsonify the data
    .then(redditData => {
        return redditData.json()
    })
    // step 3 - do something with the json data
    .then(jsonData => {
        const body = document.querySelector('body')
        const img = document.createElement('img')
        img.src = jsonData.data.children[2].data.thumbnail
        img.alt = jsonData.data.children[2].data.title
        // console.log(jsonData.data.children[2].data)
        body.append(img)
    })
    // step 4 -- be a good programmer and handler your errors
    .catch(err => console.warn(err))

