start()

async function start() {
    const newDeckUrl = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1 "

    res = await axios.get(newDeckUrl)
    const deck_id = res.data.deck_id;

    window.onkeydown = function (event) {
	if (event.key == 'n')
	    drawCard(deck_id)
    }
    button = document.querySelector("button");
    button.addEventListener("click", function (event) {
	draw5(deck_id)
    })
}

async function draw5(deck) {
    let hand = [];
    let cardUrl =  "https://deckofcardsapi.com/api/deck/" + deck + "/draw/?count=1";
    for (let i = 0; i < 5; i++)
	hand.push(axios.get(cardUrl))

    let p = await Promise.all(hand)

    for( let i = 0; i < p.length; i++)
	showCard(p[i].data.cards[0])	    
}


async function drawCard (deck) {

    let cardUrl =  "https://deckofcardsapi.com/api/deck/" + deck + "/draw/?count=1";
    res = await axios.get(cardUrl)
    showCard(res.data.cards[0])
}


function showCard( card ){
    console.log(card.value, "of", card.suit)
    addElements ( card )
}

function addElements( card ) {

    img = document.createElement('img')
    img.src = card.images.png;
    img.height = "200";
    document.body.appendChild(img)
}

