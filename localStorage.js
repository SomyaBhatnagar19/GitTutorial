let form = document.getElementById('my-form');

form.addEventListener('submit', storeDetails);

function storeDetails(e){
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    // console.log(name);
    // console.log(email);
    localStorage.setItem('name',name);
    localStorage.setItem('email',email);
}

