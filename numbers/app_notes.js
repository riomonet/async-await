//PARRALEL api calls
/*
async function getPokeInParrallel () {
    let baseURL = "https://pokeapi.co/api/v2/pokemon/";
    let p = await Promise.all([
	axios.get(baseURL + "1"),
	axios.get(baseURL + "2"),
	axios.get(baseURL + "3")
    ]);

    console.log(p)
}


getPokeInParrallel()
*/

//REFACTORING ASYNC CODE
/*
function getThreePokemon() {
    let baseURL = "https://pokeapi.co/api/v2/pokemon/";
    axios.get(baseURL + "1") //notice the destructuring in the .then arg
	.then(({data}) => {
	    console.log(data.name)
	    return axios.get(baseURL + "2")
	})
	.then(({data}) => {
	    console.log(data.name)
	    return axios.get(baseURL + "3")
	})
	.then(({data}) => console.log(data.name))
}

//this is the promise syntax refactored in async await
async function get3Pokemon() {
    try {
	let baseURL = "https://pokeapi.co/api/v2/pokemon/";
	// here we are destructuring and renaming
	//{data: p1}
	let {data: p1} = await axios.get(baseURL + "1")
	let {data: p2} = await axios.get(baseURL + "2")
	let {data: p3} = await axios.get(baseURL + "3")
	console.log(p1.name, p2.name, p3.name)
	} catch(e) {
		console.log("fucked up", e)	
    }
}

get3Pokemon();
*/

//ERROR HANDLING ASYNC

/*
async function getStarWarsFilms() {
    const res = await axios.get("https://swapi.dev/api/filmms")
    console.log(res)
}

getStarWarsFilms()

*****try catch example***
	  try {
	      console.blog("pure shit")
	  }
	  catch  {
	      console.log("error is caughtx")
	  }

async function getUser(user) {
    try {
	let url = `https://api.github.com/users/${user}`;
	let res = await axios.get(url);
	console.log(res.data.bio)
    } catch (e) {
	console.log(e," does not exist");
    }
}


getUser('riomonet')
*/


// Class Async
/*
class Pokemon {

    constructor(id) {
	this.id = id;
    }

    async getInfo() {
	const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.id}/`)
	console.log(res.data.name)
    }
}

const p = new Pokemon(12);
console.log(p.getInfo())
*/




//  OBJECT ASYNC
/*
const deck = {
    async init() {
	let res = await axios.get("https://deckofcardsapi.com/api/deck/new/")
	this.deckId = res.data.deck_id;
    },
    async shuffle() {
	let res = await axios.get(`https://deckofcardsapi.com/api/deck/${this.deckId}/shuffle/`)
    },
    async draw() {
	let res = await axios.get(`https://deckofcardsapi.com/api/deck/${this.deckId}/draw/?count=1`)
	console.log(res.data.cards[0])
    }
}
*/



// const form = document.querySelector('#form')

// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const input = document.querySelector('#nums')
//     res = parceInput(input)
//     if (res.length > 0) {
// 	if (res.length > 1)
// 	    callApi(res)
// 	else
// 	    for( let i = 0; i < 4; i++)
// 		callApi(res)
// 	}

//     input.value = ""
// });



// function parceInput(input) {
//     const vals = input.value.split(/,| /) //create array out of runes separated by , or space		
//     const numArr = vals.map(inp => parseInt(inp,10)) //convert from strings to nums
//     const filtered = numArr.filter(x => (!isNaN(x))) //filter out any non number runes
//     return filtered;
// }


// function callApi(arr) {
//     const str = arr.toString();
//     base = "http://numbersapi.com/" + str + "/?json"
//     axios.get(base)
// 	.then ( res => {
// 	    addAllToDom(res.data)
// 	})
//     	.catch ( err => console.log("uh oh",err));
// }


// function addAllToDom( data ) {
//     if ( 'text' in data )
// 	addElements( data.text )
//     else
// 	for ( key in data )
// 	    addElements( data[key] )
// }

// function addElements( text ) {
//     ul = document.querySelector( '#list' )
//     li = document.createElement( 'li' );
//     li.innerText = text
//     ul.append( li )
// }

