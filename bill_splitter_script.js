console.log("script is running");
var btn_calculate = document.getElementById("btnCalculate");




function task_2() {
    document.getElementById("inp_subTotal").setAttribute("readonly",true);
    
    
// Using Google Gemini 2.5 Flash, I have got it to generate some stupid but funny menu items
let ridiculousMichelinMenu = {
  // Aperitifs & Small Bites (Pretentiously Tiny)
  "The 'Before the Meal' Air (Slightly Oaked)": 45.00,
  "Deconstructed Dust Bunny (Aged under the Chef's Stove)": 28.99,
  "Pickled Single Grape (It Identifies as a Raisin)": 19.99,

  // Appetizers (Where the Portions Mock You)
  "Micro-Garnish Salad with Invisible Dressing": 55.00,
  "Tears of Our Sommelier (Served Chilled in a Test Tube)": 62.00,
  "Existential Scallop (One Scallop, Two Hours of Reflection)": 75.99,

  // Main Courses (The Height of Absurdity)
  "Silence of the Lamb (Just a Note from the Chef)": 149.00,
  "Artisan Toasted Water (Hand-Filtered H₂O, Brushed with a Torch)": 115.00,
  "Unfinished Poem of a Chicken Breast (Raw, Poetic, Confusing)": 138.00,
  "Vegan's Delight: A Single, Perfectly Sourced Pebble": 95.00,

  // Sides (Because You're Still Hungry)
  "Truffle-Infused Napkin (For Flavor While You Wait)": 35.00,
  "Anxiety-Relieving Garnish (Pure Parsley)": 15.00,

  // Desserts (Sweet, Sweet Deception)
  "Chocolate Log (A Real Log, Drizzled with Syrup)": 88.00,
  "The Bill (Tastes Better Than Everything Else)": 999.99,
  "Mouthwash Mousse (A Minty Fresh Nightmare)": 79.00
};
let menu = ridiculousMichelinMenu;

document.getElementById("productSelection").addEventListener("change",setSelection);
// requires a select group with multiple selectable items
let subtotalElem = document.getElementById("inp_subTotal");
let productSelectionFieldset = document.getElementById("productSelection")
Object.keys(menu).forEach(key => {
    let lbl = document.createElement("label");
    let inpt = document.createElement("input");
    lbl.for = key.toString();
    lbl.innerHTML = key.toString() + ": £"+menu[key].toString();
    inpt.type = "checkbox";
    inpt.id = key.toString();
    inpt.name = key.toString();
    inpt.value = menu[key].toString();
    console.log(key + " >> "+ menu[key].toString());
    productSelectionFieldset.appendChild(lbl);
    productSelectionFieldset.appendChild(inpt);
    productSelectionFieldset.appendChild(document.createElement("br"));
})
subtotalElem.value = 0;



function setSelection(event) {
    let theTriggeredCheckbox = event.target;
    let subtotalElem = document.getElementById("inp_subTotal");
    let a = parseFloat(subtotalElem.value);
    let b = parseFloat(theTriggeredCheckbox.value)
    switch(theTriggeredCheckbox.checked) {
        case true:
            a = a + b;
            break;
        case false:
            a = a - b;
            break;
    }
    subtotalElem.value = a.toFixed(2).toString();
   
    
}
}



//document.getElementById("productSelection").onchange = setSelection(this);





function task_1() {
    var subTotal = parseFloat(document.getElementById("inp_subTotal").value);
    var tip = parseFloat((document.getElementById("inp_tip").value) / 100);
    var noPeople = parseInt(document.getElementById("inp_people").value);
    lblAnswer.innerHTML = "TOTAL PER PERSON: £"+calculate(subTotal,tip,noPeople);
 
// console.log("ST: "+subTotal);
// console.log("TIP_MUL: "+tip);
// console.log("PPL: "+noPeople);

}

btn_calculate.onclick = function() {
    task_1();
}

function calculate(subTotal,tip,numPeople) {
    var sub_tip = subTotal * tip;
    var total_with_tip =  (subTotal + sub_tip);
    // console.log("SUB_TIP: £"+sub_tip);
    // console.log("TotalWithTip: £"+total_with_tip);
    return (total_with_tip / numPeople).toFixed(2);

}

task_2();