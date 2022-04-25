document.getElementById('character').addEventListener("change", fetchCharacters)

function fetchCharacters(){
       let characterNum = document.querySelector('#character').value;
       let movies = [];
// console.log("characterNum",characterNum);
       fetch(`https://swapi.dev/api/people/${characterNum}`)
              .then(response => response.json())//parse response as Json
              .then(data =>fetchMovies(data.films) //console logging that information
              // .then(console.log(movies))
              // .catch(err =>{
              //        console.log(`error ${err}`)
               );
              
              

       

       // need something to capture which element (or which name in the character list) 
       //the user has clicked on... and then you can have a conditional statement... if the clickedName === 1, return the specific json data for that actor
       // document.querySelector('#1').src = data.films
       // document.querySelector('#2').src = data.films
       // document.querySelector('#3').src = data.films
       // document.querySelector('#4').src = data.films
       // document.querySelector('#5').src = data.films
       // document.querySelector('#6').src = data.films
       // document.querySelector('#7').src = data.films
       // document.querySelector('#8').src = data.films
       // document.querySelector('#9').src = data.films
    
//        function onNameClicked(string,id){
//            console.log(`character name is ${string}`);
//        if(id ===1){ 
//             fetchCharacters(1);
//      }
//      fetchCharacters(1);
//      if(id === 2){
//             fetchCharacters(2)
//      }
//      fetchCharacters(1);
//      if(id === 2){
//             fetchCharacters(2)
//      }
//      fetchCharacters(1);
//      if(id === 2){
//             fetchCharacters(2)
//      }
//      fetchCharacters(1);
//      if(id === 2){
//             fetchCharacters(2)
//      }
//      fetchCharacters(1);
//      if(id === 2){
//             fetchCharacters(2)
//      }
//      fetchCharacters(1);
//      if(id === 2){
//             fetchCharacters(2)
//      }
//      fetchCharacters(1);
//      if(id === 2){
//             fetchCharacters(2)
//      }
//      fetchCharacters(1);
//      if(id === 2){
//             fetchCharacters(2)
//      }
//      }
     

}

function fetchMovies(movies){
       for(let i = 0; i < movies.length ; i++){
              fetch(movies[i])
                     .then(response => response.json())
                     .then(data => document.querySelector('#info').innerHTML = data.title)
                        
       }
}
