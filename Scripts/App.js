console.log("Hello");
var container = document.createElement("div");
container.style.border = "solid";
container.style.borderColor = "black";
container.style.width = "75%";
container.style.height = "600px";
container.style.borderRadius = "10px";
container.style.padding = "5px";
container.style.backgroundColor = "Black";
document.body.append(container);

var drop = document.createElement("dropdown");
container.style.border = "solid";
container.style.borderColor = "black";
container.style.width = "75%";
container.style.height = "600px";
container.style.borderRadius = "10px";
container.style.padding = "5px";
container.style.backgroundColor = "Black";
document.body.append(container);

var title = document.createElement("h2")
title.style.fontFamily = "IMPACT";
title.innerHTML = "Add your values:";
title.style.color = "white";
title.style.cssFloat = "left";
title.style.top = "10px";
title.style.margin = "2px";
container.append(title);

var listInput = document.createElement("input");
listInput.placeholder = "add a number value";
listInput.style.position = "relative";
listInput.style.cssFloat = "left";
listInput.style.top = "10px";
listInput.style.width = "500px";
listInput.style.left = "20px";
container.append(listInput);

var addButton = document.createElement("button");
addButton.innerHTML = "add item";
addButton.style.position = "relative";
addButton.style.cssFloat = "middle";
addButton.style.top = "10px";
addButton.style.width = "10%";
addButton.style.left = "40px";
container.append(addButton);

var listOfNumbers = [];
var count = 0; 
var currentIndex = 0;
addButton.addEventListener("click", addItem);
function addItem(){
    if(!listInput.value == "" && listInput.value % 1 == 0){
        listOfNumbers.push(listInput.value)
        displayItems();
        count++;
        console.log(listOfNumbers);
        listInput.value = "";
    }
}

function displayItems(){
    var p  = document.createElement("p")
    p.innerHTML = listOfNumbers[count]
    p.id = count
    p.style.color = "white";
    p.style.position = "static"
    container.append(p)
    listInput.Value = "";
}

var values = ["Select Value", "Maximum", "Minimum", "Average", "Median", "Mode"];

    var select = document.createElement("select");
    select.addEventListener("change", myScript);
    select.name = "dropDown";
    select.id = "dropDown";

    for(var i = 0; i < values.length; i++){
        var option = document.createElement("option");
        option.value = values[i];
        option.text = values[i];
        select.appendChild(option);
    }

    container.append(select);

    function myScript(e){
        console.log(e.target.value);
        if(listOfNumbers[0] == null){
            output.innerHTML = "Please input your values into the list first!";
        }else{
            if(e.target.value == "Maximum"){
                console.log(findMax());
                output.innerHTML = "Your Maximum Value is: " + (findMax());
            }
            if(e.target.value == "Minimum"){
                console.log(findMin());
                output.innerHTML = "Your Minimum Value is: " + (findMin());
            }
            if(e.target.value == "Average"){
                console.log(findAvg());
                output.innerHTML = "Your Average Value is: " + (findAvg());
            }
            if(e.target.value == "Median"){
                console.log(findMed());
                output.innerHTML = "Your Median Value is: " + (findMed());
            }
            if(e.target.value == "Mode"){
                if(findMode().length === 0){
                    console.log("There is no Mode Value");
                    output.innerHTML = "There is no specific Mode Value";
                }else{
                console.log(findMode());
                output.innerHTML = "The Mode is: " + findMode();
                }
            }
     }
    }

    function findMax(){
        var max = Number(listOfNumbers[0]);
        for(var j = 0; j < listOfNumbers.length; ++j){
            if(Number(listOfNumbers[j]) > max){
                max = listOfNumbers[j];
            }
        }
        return Number(max);
    }
    
    function findMin(){
        var min = Number(listOfNumbers[0]);
        for(var j = 0; j < listOfNumbers.length; ++j){
            if(Number(listOfNumbers[j]) < min){
                min = listOfNumbers[j];
            }
        }
        return Number(min);
    }

    function findAvg(){
        var avg;
        var total = Number(listOfNumbers[0]);
        for(var i = 1; i < listOfNumbers.length; i++){
            total += Number(listOfNumbers[i]);
        }
        avg = total / listOfNumbers.length;
        return avg;
    }

    function findMed() {
        const arrSorted = listOfNumbers.sort((a, b) => a - b);
        if(arrSorted.length % 2 === 0){
            return ((Number(arrSorted[arrSorted.length/2 - 1]) + Number(arrSorted[arrSorted.length/2]))) / 2
        }else{
            return arrSorted[Math.floor(arrSorted.length/2)];
        }
      }

    var count = 0;  


   function findMode() {
  const frequencyTable = {};
  listOfNumbers.forEach(elem => frequencyTable[elem] = frequencyTable[elem] + 1 || 1);

  let modes = [];
  let maxFrequency = 0;
  for(const key in frequencyTable) {
    if(frequencyTable[key] > maxFrequency) {
  		modes = [Number(key)];
  		maxFrequency = frequencyTable[key];
  	}
  	else if(frequencyTable[key] === maxFrequency) {
  		modes.push(Number(key));
  	}
  }
  
  if(modes.length === Object.keys(frequencyTable).length) modes = [];

  return modes;
}

select.style.color = "Black";
select.style.backgroundColor = "white";
select.style.width = "100px";
select.style.height = "20px";
select.style.position = "relative";
select.style.left = "60px";
select.style.top = "11px";

var output = document.createElement("div");
output.style.backgroundColor = "white";
output.style.width = "20%";
output.style.height = "10%";
output.style.position = "relative";
output.style.left = "200px";
output.style.top = "50px";
container.append(output);
output.innerHTML = "Output";
output.style.textAlign = "center";

