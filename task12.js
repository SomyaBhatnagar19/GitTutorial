
let form = document.getElementById('my-form');

form.addEventListener('submit', storeDetails);

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
    //console.log(parentElem);
    let childElem = document.createElement('li');
    childElem.textContent = details.name+' - '+details.email
    console.log(childElem);
    parentElem.appendChild(childElem);
}