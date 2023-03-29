
let NameInput = document.getElementById('NameInput');//Input kolo
let ageInput = document.getElementById('ageInput');//Input kolo
let emailInput = document.getElementById('emailInput');//Input kolo
let statusInput = document.getElementById('statusInput');//Input kolo
let searchInput=document.getElementById('search');
let addBtn=document.getElementById('addBtn');

let currentIndex=0;

let usersContainer=[]; 

if(localStorage.getItem('myuser')!=null)
{
    usersContainer = JSON.parse(localStorage.getItem('myuser'));
    display(usersContainer)
}
else
{
    usersContainer=[];
}
addBtn.onclick=function(){
    if(addBtn.innerHTML=='add user')
    {
        add();
    }
    else
    {
        update();
    }
    display();
    clearForm();
}
function add() {
    if(validateName()==true && validateAge()==true )
    {
        let user = {
            name: NameInput.value,
            age: ageInput.value,
            email: emailInput.value,
            status: statusInput.value
        }
        usersContainer.push(user);
        localStorage.setItem('myuser',JSON.stringify(usersContainer))//da 4shan a5od a5r update w t7wl json L string
        clearForm();
        display(usersContainer);   
    }
}

function clearForm() {
    
    NameInput.value = "";
    ageInput.value = "";
    emailInput.value = "";
    statusInput.value = "";
    addBtn.innerHTML="add user";
}

function display() { 
    let cartoona = ``;
    for(let i =0;i<usersContainer.length; i++)
    {
        cartoona +=`<tr>
        <td>${i+1}</td>
        <td>${usersContainer[i].name}</td>
        <td>${usersContainer[i].age}</td>
        <td>${usersContainer[i].email}</td>
        <td>${usersContainer[i].status}</td>
        <td> <button onclick="getInfo(${i})" class="btn btn-outline-warning">update</button></td>
        <td> <button onclick="deleted(${i})" class="btn btn-outline-danger">delete</button></td>
    </tr>`
    }
    document.getElementById('tableBody').innerHTML = cartoona;
 }


function Search (searchText){
    let cartona ='';
    for (let i=0 ; i<usersContainer.length;i++)
    if (usersContainer[i].name.toLowerCase().includes(searchText.toLowerCase()))
    {
        cartona+=
        `
        <tr>
            <td>${i+1}</td>
            <td>${usersContainer[i].name}</td>
            <td>${usersContainer[i].age}</td>
            <td>${usersContainer[i].email}</td>
            <td>${usersContainer[i].status}</td>
            <td> <button onclick="getInfo(${i})" class="btn btn-outline-warning">update</button></td>
            <td> <button onclick="deleted(${i})" class="btn btn-outline-danger">delete</button></td>
        </tr>
        `;
    } document.getElementById('tableBody').innerHTML=cartona;
}


function deleted (deletedIndex){
    usersContainer.splice(deletedIndex,1);
    localStorage.setItem('myuser',JSON.stringify(usersContainer))
    display(usersContainer);
} 
function getInfo (index){
   
    let currentUser=usersContainer[index]
    NameInput.value = currentUser.name;
    ageInput.value = currentUser.age;
    emailInput.value =currentUser.email;
    statusInput.value = currentUser.status;
    addBtn.innerHTML='update';
    currentIndex=index;
}
function update(){
    let user = {
        name: NameInput.value,
        age: ageInput.value,
        email: emailInput.value,
        status: statusInput.value
    }
    // console.log(usersContainer);
    usersContainer[currentIndex]=user;
    // console.log(usersContainer);
    localStorage.setItem('myuser',JSON.stringify(usersContainer))
    
    clearForm();
    display();
}
function validateName(){
    let regex=/^[a-zA-Z ]{2,14}$/;
    if (regex.test(NameInput.value)==true)
    {
        NameInput.classList.replace('is-invalid','is-valid')
        return true;
    }
    else
    {
        NameInput.classList.add('is-invalid')
    }
}
function validateAge(){
    let regex=/^[1-9]{1,2}$/;
    if (regex.test(ageInput.value)==true)
    {
        ageInput.classList.replace('is-invalid','is-valid')
        return true;
    }
    else
    {
        ageInput.classList.add('is-invalid')
    }
}




