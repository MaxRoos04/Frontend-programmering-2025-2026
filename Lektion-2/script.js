const pi = "pi";
const value = 3.14; 
const diameter = 7; 


console.log("Värdet för " + pi + " är " + value); 

console.log(`värdet för ${pi} är ${value}`);

console.log(`Min cirkel har omkrets ${diameter*value}`);


let count = 0; 
function clickCounter() {
    count++; 
    console.log(` Du har klickat ${count} gånger! `);
}

function hello() {
    let name = prompt("Vad heter du?"); 
    alert(`Tjena ${name}!`)
}

function handelName() {
    //const namn = document.querySelector("#namn").value; 
    const namn = document.getElementById("namn").value; 
    //console.log(`Tjena ${namn}!`)
    document.getElementById("name-output").innerHTML = `Hej ${namn}`; 
}