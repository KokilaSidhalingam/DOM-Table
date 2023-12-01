let list1 = [];
let list2 = [];
let list3 = [];

let n = 1;
let x = 1;
function AddRow(){
    //select id as show for adding a row to the table
    let addrow = document.getElementById("show");
    var newrow = addrow.insertRow(n);
    
// Collection of data from inputand stored in table 
list1[x] = document.getElementById("fname").value;
list2[x] = document.getElementById("lname").value;
list3[x] = document.getElementById("email").value;

// Inserting new row
let cell1 = newrow.insertCell(0);
let cell2 = newrow.insertCell(1);
let cell3 = newrow.insertCell(2);

cell1.innerHTML = list1[x];
cell2.innerHTML = list2[x];
cell3.innerHTML = list3[x];
n++;
x++;
}