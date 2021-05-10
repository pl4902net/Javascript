// test reading local file

 function loadJSON(callback)
 {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', './dino.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }

 function init() 
 {
 loadJSON(function(response) {
  // Parse JSON string into object
    let actual_JSON = JSON.parse(response);
    console.log(actual_JSON);
 });
}



function readImage(file) {
    // Check if the file is an image.
    if (file.type && !file.type.startsWith('image/')) {
      console.log('File is not an image.', file.type, file);
      return;
    }
  
    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
      img.src = event.target.result;
    });
    reader.readAsDataURL(file);
  }
  let test2  = readImage('./dino.json')
console.log(test2);

function Dino(species, height, weight, diet, where, when, fact, img) {
    this.species = species;
    this.height = height;
    this.weight = weight;
    this.where = where;
    this.diet = diet;
    this.when = when;
    this.fact = fact;
    this.img = img;
  }
  let dinos = [];
  fetch("./dino.json")
    .then((res) => res.json())
    .then((data) => {
      let dinos = data.Dinos;
      console.log(dinos);
      getDinos(dinos);
    });
  function getDinos(dinos) {
    dinos.map((dino) => console.log(dino));
  }
