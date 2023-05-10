//Const container
const container = document.getElementById("container");
console.log("Ciao");

//const button easy
const buttonEasy = document.getElementById("button-easy");
console.log(buttonEasy);

//cost Array Numeri Random
const numeriArray= generaOrdineNumeroRandom(1, 16);
console.log(numeriArray);

//create click button easy
buttonEasy.addEventListener("click", creaGrigliaEasy);

//FUNZIONI

    //Crea Griglia easy 
    function creaGrigliaEasy() {
    buttonEasy.classList.add("inactive");
    
    for (let i = 1; i < 101; i++){
            const newSquare = createNewCol ("div","square");
            container.append(newSquare);
    
            newSquare.addEventListener("click",
                function(){
                    newSquare.classList.add("blue-square");
                    console.log(i);
                    newSquare.append(i);
                }
            )
        }
    }

 

    //Create new element
    function createNewCol(tagToAdd , classToAdd) {
        const newCol = document.createElement(tagToAdd);
        newCol.classList.add(classToAdd);
        return newCol;
    }
    

    //create order random number
    function generaOrdineNumeroRandom(min, max) {
        const numeriArrayRandom = [];
      
        while(numeriArrayRandom.length < max) {
              //Creare numero casuale nel min e max
            const nuovoNum = generaNumeroRandom(min,max);
            if(!numeriArrayRandom.includes(nuovoNum)) {
                numeriArrayRandom.push(nuovoNum);
            }
        }
        return numeriArrayRandom;
    }

    //create random number
    function generaNumeroRandom(min , max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }


