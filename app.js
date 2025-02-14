
// Check for valid form entries
function checkEntries()
{
// prep to check if received enough comparison data
    boolName = false
    boolHeight = false
    boolWeight = false
    boolDiet = false
    boolOther = false
// check for valid name
    testName = humanName.replace(/ /g,"");
    if (testName == "") {humanName = ""}
    if (humanName == "") {boolName = false}
    else {boolName = true}
// check for valid diet
    if (humanDiet == "Not Supplied") {boolDiet = false}
    else 
    {
        boolDiet = true
        boolOther = true
    }
// check if height supplied
    if (humanHeight == "") {boolHeight = false}
    else 
    {
        boolHeight = true
        boolOther = true
    }
// check if weight supplied
    if (humanWeight == "") {boolWeight = false}
    else 
    {
        boolWeight = true
        boolOther = true
    }
    if (boolName == false) {return false}
    else if (boolOther == false) {return false}
    else {return true}
}

// Creating Grid
function makeGrid(tiles,dinos)
{
    let mainGrid = document.getElementById("grid");
    for (let tileItem = 0; tileItem < tiles; tileItem++)
	{
// Begin creating tile
        let tile = document.createElement('div');
        tile.className = "grid-item";
// Create header
        let head = document.createElement('h3');
        let headText = dinos[tileItem]['name'];
        head.appendChild(document.createTextNode(headText));
        tile.appendChild(head);
// Create image reference
        let image = document.createElement('img');
        image.src = dinos[tileItem]['pic'];
        tile.appendChild(image);
// Create paragraph with compare & fact text
        let compareData = document.createElement('p');
        let compareText = dinos[tileItem]['fact'];
        compareData.appendChild(document.createTextNode(compareText));
        tile.appendChild(compareData);   
// Add tile to grid
        mainGrid.appendChild(tile);
    }
}

// Function for when Compare button is pressed
function submitted(event)
{

// Pull in data submitted in the form by user
    humanName = document.querySelector('#name').value;
    humanFeet = document.querySelector('#feet').value;
    humanInches = document.querySelector('#inches').value;
// Convert height to just inches
    humanHeight = humanFeet*12 + humanInches*1
    humanWeight = document.querySelector('#weight').value;
    humanDiet = document.querySelector('#diet').value;
// Create human data object from supplied entries
    let humanData = 
    {
        'name': humanName,
        'height': humanHeight,
        'weight': humanWeight,
        'diet': humanDiet
    };

// check for valid form submissions
// If Name not supplied error
// If one other entry not supplied error
// Error - highlight "Please enter Name and at least 1 other {Height , Weight , Diet} to be compared"
    let validCheck = checkEntries();
// If valid check is bad
    if (validCheck == false)
    {
// highlight criteria for the form and reset for new entires        
        document.querySelector('#criteria').innerHTML = ("<mark>Please enter Name and at least 1 other {Height , Weight , Diet} to be compared</mark>");
        document.getElementById("dino-compare").reset();
    }
// if valid check is ok begin steps to create grid
    else
    {
// create array of objects to make grid from
        let tileArray = [];
        let dinoCount = 0;
        let ranNum = 0;
        let workArray = [];
        for (let items = 0; items < 9; items++)
        {
            let workingObject = {};
            let compareText = "";

// Create special human object to be middle tile
            if (items == 4)
            {
                workingObject['name'] = humanData['name'];
                workingObject['fact'] = "";
                workingObject['pic'] = "./images/human.png";

            }
// Create special pigeon object for grid
            else if (dinoData[dinoCount]['name'] == "Pigeon")
            {
                workingObject['name'] = dinoData[dinoCount]['name'];
                workingObject['fact'] = dinoData[dinoCount]['fact'];
                workingObject['pic'] = "./images/" + dinoData[dinoCount]['name'] + ".png";
                dinoCount++;
            }
// Create all other objects for grid
            else
            {
                workArray = [];
                ranNum = 0
                workArray.push(dinoData[dinoCount]['where']);
                workArray.push(dinoData[dinoCount]['when']);
                workArray.push(dinoData[dinoCount]['fact']);
                workingObject['name'] = dinoData[dinoCount]['name'];
                if (boolHeight == true) {workArray.push(dinoData[dinoCount].getHeight(humanData));}
                if (boolWeight == true) {workArray.push(dinoData[dinoCount].getWeight(humanData));}
                if (boolDiet == true) {workArray.push(dinoData[dinoCount].getDiet(humanData));}
                ranNum = Math.floor(Math.random() *(workArray.length));
                workingObject['fact'] = workArray[ranNum];
                workingObject['pic'] = "./images/" + dinoData[dinoCount]['name'] + ".png";
                dinoCount++;
            }
            tileArray.push(workingObject);
        }

// blank webpage and create grid
        let pageHeader = document.getElementById("pageHeader")
        let pageForm = document.getElementById("dino-compare")
        pageHeader.style.display = "none"
        pageForm.style.display = "none"
        makeGrid(9,tileArray);
    }
}

// Creates object with 4 main properties and a 3 member array of facts
// Properties = Name , Weight , Height , Diet
// Facts = Where , When , Fact
function DinoConstructor (name,weight,height,diet,location,timeframe,fact)
{
    this.name = name;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.where = this.name + " were located in " + location;
    this.when = this.name + " lived during the " + timeframe;
    this.fact = fact;   
}

// Create Dino Compare Method 1 - Height
DinoConstructor.prototype.getHeight = function(humanObj)
{
    if (humanObj.height == this.height)
    {
        return "You and " + this.name + "are the exact same height.";
    }
    else if (humanObj.height > this.height)
    {
        return "You are " + (humanObj.height - this.height) + " inches taller than " + this.name + ".";
    }
    else
    {
        return "You are " + (this.height - humanObj.height) + " inches shorter than " + this.name + ".";
    }
}
// Create Dino Compare Method 2 - Weight
DinoConstructor.prototype.getWeight = function(humanObj) 
{
    if (humanObj.weight > this.weight)
    {
        let diff = humanObj.weight/this.weight;
        if (Math.round(diff) == 0)
        {
            return "You and " + this.name + " are close to the same weight.";
        }
        else
        {
            return "You are " + Math.round(diff) + " times heavier than " + this.name + ".";
        }
    }
    else
    {
        let diff = this.weight/humanObj.weight;
        if (Math.round(diff) == 0)
        {
            return "You and " + this.name + " are close to the same weight.";
        }
        else
        {
            return this.name + " is " + Math.round(diff) + " times heavier than you.";
        }
    }
}
// Create Dino Compare Method 3 - Diet
DinoConstructor.prototype.getDiet = function(humanObj)
{
    if (humanObj.diet == this.diet)
    {
        return "You and " + this.name + " have the same diet, you are both a " + this.diet;
    }
    else
    {
        return this.name + " has a different diet then you, they were a "  + this.diet;
    }
}

// On button click, prepare and display infographic
let submitButton = document.querySelector('#btn');
submitButton.addEventListener('click', submitted, false);

// Pull in from dino.json and created using DinoConstructor function
fetch("https://raw.githubusercontent.com/udacity/Javascript/master/dino.json")
.then(response => response.json())
.then((fetchData) => 
{
    dinoData = []
    tempDinoData = fetchData.Dinos;
    tempDinoData.forEach(function(dino)
    {
        dinoData.push(new DinoConstructor (dino.species,dino.weight,dino.height,dino.diet,dino.where,dino.when,dino.fact));
    })
})
