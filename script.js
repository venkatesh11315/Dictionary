
let form = document.querySelector('.dicform');

let wordinput = document.querySelector('.inuputword');


let meaningforword = document.querySelector('.meaningforword');
let parga =document.querySelector('.parga')

let Button = document.querySelector('.searchButton');
let wordinfo =document.querySelector('.wordinfo')


async function getwordMeaning(word) {
    try {
        let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        let data = await response.json();

       // console.log(data[0].word)
        //console.log(data[0].sourceUrls)
       // console.log(data[0].meanings)
        //console.log(data[0].phonetics[0].audio)
        console.log(data[0].meanings[0].definitions[0].definition

            )

//create list 


//get data of meaning

let list = document.createElement('ul');
       

        let meanings = data[0].meanings;
        // console.log(meanings)

        for (let meaning of meanings) {
            // create a list item
            let listItem = document.createElement('li');

            // set the content of the list item
            listItem.innerHTML = `${meaning.partOfSpeech}`;

            list.appendChild(listItem);
        }

wordinfo.appendChild(list);
        
                    //html result//
meaningforword.innerHTML = `

<div class="row">
<h1 class = "h1style">Word : ${data[0].word}</h1>
<div class="col-6">
<audio controls class="audio">
<source src="${data[0].phonetics[0].audio}" type="audio/mpeg">
</audio>
<h2>sourceurls</h2>
<a href="${data[0].sourceUrls[0]}">${data[0].sourceUrls[0]} </a>
</div>
<div class="col-6">

</div>
</div>`
parga.innerHTML=`<p> Definition:${data[0].meanings[0].definitions[0].definition}</p>`
    }
    catch (error) {
        console.error('featchin error')
    }
}


function handleSubmit(event) {
    event.preventDefault();
    //preventDefault()
    let word = wordinput.value;
    console.log(word)

    getwordMeaning(word);

}
form.addEventListener('submit', handleSubmit);
Button.addEventListener('click', handleSubmit);