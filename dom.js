//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//document.title= 'Item List new';
//console.log(document.title);
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);
//document.all[10].textContent='Hello';
//console.log(document.all[18]);
//console.log(document.form);

//GetElementById
//console.log(document.getElementById('header-title'));
let headerTitle = document.getElementById('header-title');
let header = document.getElementById('main-header');
headerTitle.textContent='hello';
console.log(headerTitle);
//textContent shows the hidden span content also while innerText commands hides it
header.style.border='solid 3px #000';

//GetElementsByClassName
let items=document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent='Hello';
for(var i=0; i <items.length; i++) {
    items[i].style.backgroundColor='pink';
}

let t = document.getElementsByClassName('card card-body');
console.log(t);
t[0].fontWeight='bold';
t[0].style.color='green';