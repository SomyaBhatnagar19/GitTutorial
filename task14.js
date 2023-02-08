
let form = document.getElementById('my-form');
// let btn = document.getElementById('button');
form.addEventListener('submit', storeDetails);
// btn.addEventListener('click',delete);

function storeDetails(e){
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    const details={
        name: name,
        email: email,
    }

    localStorage.setItem(details.email,JSON.stringify(details));
    showUserData(details);

}

function showUserData(details){
    let parentElem = document.getElementById('List-of-User Details');
    let childElem = document.createElement('li');

    //adding the delete button functionality
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm';
    deleteBtn.id = 'delete';
    deleteBtn.innerHTML ='<p>Delete</p>';
    deleteBtn.style.backgroundColor = 'red';
    childElem.textContent = details.name+' - '+details.email;
    deleteBtn.onclick = ()=> {
        localStorage.removeItem(details.email);
        parentElem.removeChild(childElem);
    }

    //adding editing functionality
    let editBtn = document.createElement('button');
    editBtn.id = 'edit';
    editBtn.className = 'btn btn-sm';
    editBtn.style.backgroundColor = 'pink';
    editBtn.innerHTML = 'Edit';
    editBtn.onclick=()=>
    {
        document.getElementById('name').value = details.name;
        document.getElementById('email').value = details.email;
        
        localStorage.removeItem(details.email);
        parentElem.removeChild(childElem);
        
    }
    childElem.appendChild(deleteBtn);
    childElem.appendChild(editBtn);
    parentElem.appendChild(childElem);
}

