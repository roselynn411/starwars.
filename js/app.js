document.getElementById('character').addEventListener("change", fetchCharacters)

function fetchCharacters(){
const characterNum = document.querySelector('#character').value;
// console.log("characterNum",characterNum);
fetch(`https://swapi.dev/api/people/${characterNum}`)
       .then(response => response.json())//parse response as Json
       .then(data => console.log(data.films)); //console logging that information
       // need something to capture which element (or which name in the character list) 
       //the user has clicked on... and then you can have a conditional statement... if the clickedName === 1, return the specific json data for that actor
       document.querySelector('#1').src = data.films
       document.querySelector('#2').src = data.films
       document.querySelector('#3').src = data.films
       document.querySelector('#4').src = data.films
       document.querySelector('#5').src = data.films
       document.querySelector('#6').src = data.films
       document.querySelector('#7').src = data.films
       document.querySelector('#8').src = data.films
       document.querySelector('#9').src = data.films

       // .catch(err =>{
       //        console.log(`error ${err}`)
       // })

}
