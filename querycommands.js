//QUERY SELECTOR//
let header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 5px blue';

let secondItem = document.querySelector('.list-group-item:nth-child(2)');
console.log(secondItem);
secondItem.style.backgroundColor = 'green';

let thirditem = document.querySelector('.list-group-item:nth-child(3)');
console.log(thirditem);
thirditem.style.visibility = 'hidden';

//QUERY SELECTOR ALL//
let titles = document.querySelectorAll('.title');
console.log(titles);

let odd = document.querySelectorAll('li:nth-child(odd)');
for(let i=0; i<odd.length; i++) {
    odd[i].style.backgroundColor ='green';
}

