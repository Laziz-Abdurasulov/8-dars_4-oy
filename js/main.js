let elForm = document.querySelector(".js-form");
let elInput = document.querySelector(".js-input");
let elList = document.querySelector(".films");

function serachMovie(array, node) {
    node.innerHTML = "";
    array.forEach((element) => {

        let newItem = document.createElement("li");
        let newTitle = document.createElement("h3");
        let newText = document.createElement("p");
        let newImg = document.createElement("img");
        let newBox = document.createElement("div");
        let newYear = document.createElement("p");
        let newGenre = document.createElement("p");
       
        newTitle.textContent = element.Title;
        newTitle.style.color = "red";
        newTitle.style.textAlign = "center";
        newText.textContent = element.Type; 
        newYear.textContent = `Year: ${element.Year}`;
        newYear.style.marginLeft = "15px";
        newGenre.textContent = `Genre: ${element.Genre}`

        newItem.setAttribute("class", "item");
        newTitle.setAttribute("class", "title");
        newText.setAttribute("class", "text");
        newImg.setAttribute("src", element.Poster);
        newImg.setAttribute("class", "images");

        newItem.appendChild(newImg);
        newItem.appendChild(newTitle);
        newItem.appendChild(newYear);
        // newItem.appendChild(newGenre);
        newBox.appendChild(newText);
        node.appendChild(newItem);
    });
}

// Inputga Guardians ni kiritsa chiqyapti

// https://www.omdbapi.com/?apikey=...&s=${elInputValue}
async function getPost(val) {
    const response = await fetch(`https://www.omdbapi.com/?apikey=b0a9747e&s=${val}`)
    const data = await response.json()
    console.log(response);
    films =  data.Search
    serachMovie(films, elList)
}

elForm.addEventListener("submit", function (evt) {
    evt.preventDefault()
    let elInputValue = elInput.value;
    getPost(elInputValue);
    elInput.value = ""
})
// http://www.omdbapi.com/?i=tt3896198&apikey=b0a9747e
        
// {"Title":"Guardians of the Galaxy Vol. 2","Year":"2017","Rated":"PG-13","Released":"05 May 2017","Runtime":"136 min","Genre":"Action, Adventure, Comedy","Director":"James Gunn","Writer":"James Gunn, Dan Abnett, Andy Lanning","Actors":"Chris Pratt, Zoe Saldana, Dave Bautista","Plot":"The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.","Language":"English","Country":"United States","Awards":"Nominated for 1 Oscar. 15 wins & 59 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.6/10"},{"Source":"Rotten Tomatoes","Value":"85%"},{"Source":"Metacritic","Value":"67/100"}],"Metascore":"67","imdbRating":"7.6","imdbVotes":"655,156","imdbID":"tt3896198","Type":"movie","DVD":"22 Aug 2017","BoxOffice":"$389,813,101","Production":"N/A","Website":"N/A","Response":"True"}
        
        





