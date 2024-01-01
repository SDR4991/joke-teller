const button = document.getElementById('button');
const audioElement = document.getElementById('audio');



function toggleButton(){
    button.disabled = !button.disabled;
}

//tell Jokes
function tellMe(joke){
    VoiceRSS.speech({
        key: '4ca43decd5cb446ba48157aebf301c60',
        src: joke,
        hl: 'en-us',
        v: 'Linda',
        r: 0, 
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}

// Get Jokes
async function getJokes (){
    const apiJoke = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single';
    try{
        const response = await fetch(apiJoke);
        const data = await response.json();
        const joke = data.joke;
        tellMe(joke);
        toggleButton();
    } catch (error){
        console.log('occured error',error);
    }   
}

//Event Listeners

button.addEventListener('click',getJokes);
audioElement.addEventListener('ended',toggleButton);

