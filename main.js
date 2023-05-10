//Const container
const container = document.getElementById("container");
console.log("Ciao");


//const button easy
const buttonEasy = document.getElementById("button-easy");
console.log(buttonEasy);

//const button medium
const buttonMedium = document.getElementById("button-medium");
console.log(buttonMedium);

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
    
    //create random number
    function generaNumeroRandom(min , max) {
        const numeroRandom =  Math.floor(Math.random() * (max - min)) + min;
        return numeroRandom;
    }


