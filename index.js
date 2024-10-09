const stName = document.getElementById("name");
const roll = document.getElementById("roll");
const dept = document.getElementById("dept");
const cgpa = document.getElementById("cgpa");
const btn = document.getElementById("btn");
const tbody = document.getElementById("tbody");

btn.addEventListener('click', (e)=>{
    e.preventDefault();
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    td.innerHTML = stName.value;
    tr.appendChild(td);

    var td1 = document.createElement('td');
    td1.innerHTML = roll.value;
    tr.appendChild(td1);

    var td2 = document.createElement('td');
    td2.innerHTML = dept.value;
    tr.appendChild(td2);

    var td3 = document.createElement('td');
    td3.innerHTML = cgpa.value;
    tr.appendChild(td3);





    tbody.appendChild(tr);


})