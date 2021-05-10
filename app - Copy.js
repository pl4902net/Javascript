
    // Create Dino Constructor
    // Create object with 7 properties
    // Species , Height , Weight , Diet , Where , When , Fact
    // method to display Height
    // method to display Weight
    // method to display Diet
    // method to display random data (Where , When , or Fact)
function DinoConstructor (name,height,weight,diet,[location,timeframe,fact])
{
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.diet = diet;
    this.fact = [location,timeframe,fact];
}




    // Pulled in from dino.json and created using above constructor
    // 3 compare properties
    // Height , Weight , Diet
    // 3 facts
    // Where , when , fact



    // Create Human Object
    // 3 compare properties
    // Height , Weight , Diet

function submitted(event)
{
//    console.log("button pressed")
    // stop submit button from auto-resetting
    //event.preventDefault();
    // remove any old grid info
    //   let oldGrid = document.getElementById("grid");
    //   oldGrid.innerHTML = "";
    // Use IIFE to get human data from form
    // If Name not supplied error
    // If one other entry not supplied error
    // Error - highlight "Please enter Name and at least 1 other {Height , Weight , Diet} to be compared"
    // document.querySelector('#criteria').innerHTML = ("<mark>Please enter Name and at least 1 other {Height , Weight , Diet} to be compared</mark>");
    // Name - document.querySelector('#name').value;
    // Feet - document.querySelector('#feet').value;
    // Inches - document.querySelector('#inches').value;
    // Weight - document.querySelector('#weight').value;
    // Diet - document.querySelector('#diet').value;
    // create IIFE for humnanData object
    humanName = document.querySelector('#name').value;
//    console.log(humanName);
    humanFeet = document.querySelector('#feet').value;
//    console.log(humanFeet);
    humanInches = document.querySelector('#inches').value;
//    console.log(humanInches);
    humanHeight = humanFeet*12 + humanInches*1
//    console.log(humanHeight);
    humanWeight = document.querySelector('#weight').value;
//    console.log(humanWeight);
    humanDiet = document.querySelector('#diet').value;
//    console.log(humanDiet);
    // prep to check if received enough comparison data
    otherData = humanFeet + humanInches + humanWeight
    // check for only spaces in name
    testName = humanName.replace(/ /g,"");
    if (testName == "") {humanName = ""}
//    console.log(otherData);
    if (humanName == "")
    {
        // check that Name was supplied
        //console.log("empty name");
        document.querySelector('#criteria').innerHTML = ("<mark>Please enter Name and at least 1 other {Height , Weight , Diet} to be compared</mark>");
    }
    else if ((otherData == "") && (humanDiet == "Not Supplied"))
    {
        // check that at least 1 other entry supplied
        //console.log("empty other");
        document.querySelector('#criteria').innerHTML = ("<mark>Please enter Name and at least 1 other {Height , Weight , Diet} to be compared</mark>");
    }

    let humanData = 
    (
        function ()
        {
            return // return object???
        }
    )();
    let testDino = new DinoConstructor ("Triceratops",13000,114,"herbavor",["North America","Late Cretaceous","The largest known skull measures in at 5 feet long."]);
    console.log(humanData);
    console.log(testDino['height']);




}




// On button click, prepare and display infographic
let submitButton = document.querySelector('#btn');
submitButton.addEventListener('click', submitted, false);


// Create Dino Objects


    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 
//function compareHeight (testDino['height'],hu)

//console.log(humanHeight);
    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


//let dinoData = require("./dino.json");
//console.log(dinoData);

//import dinoData from "./dino.json";
//console.log(dinoData);

//fetch("./dino.json")
//.then(response => {
//   return response.json();
//})
//.then(dinoData => console.log(dinoData));
// foreach object in array pass thru DinoConstructor