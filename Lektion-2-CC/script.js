function handelName() {  
     const namn = document.getElementById("namn").value; 
    const energie = document.getElementById("energie").value; 
    document.getElementById("name-output").innerHTML = `Hej ${namn}, du har ${energie*20}% laddning! `; 
}