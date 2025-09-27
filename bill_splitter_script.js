console.log("script is running");
var btn_calculate = document.getElementById("btnCalculate");




function task_2() {
    document.getElementById("inp_subTotal").setAttribute("readonly",true);
    // Using Google Gemini 2.5 Flash, I have got it to generate some stupid but funny menu items
    let menu = {   
    "Washing Machine/Dishwasher ALL IN ONE Tablets 50pk":14.99,
    "Jumbo-Sized 'Magic' Thumb":19.99,
    "Napkins Du Papier":25.99
};

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