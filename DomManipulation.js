//TRAVERSING THE DOM//
var itemList = document.querySelector('#items');
//PARENTNODE//
// console.log(itemList.parentNode); //returns a div of parent
// itemList.parentNode.style.backgroundColor = 'grey';

//PARENTELEMENT//
//console.log(itemList.parentElement.parentElement); //returns a div of parent
// itemList.parentElement.parentElement.style.backgroundColor = 'grey';

//CHILDNODE//
// console.log(itemList.childNodes); //returns a nodelist/ array along with spaces & texts 
 
//CHILDREN//
// console.log(itemList.childNodes); //returns an array of just the text no line breaks
// itemList.children[0].textContent = 'hello Item 1';

//FIRSTCHILD//
// console.log(itemList.firstChild); //gives text nodes with line breaks and spaaces

//FIRSTELEMENTCHILD//
//console.log(itemList.firstElementChild); //gives li of that element
itemList.firstElementChild.textContent = 'Hello World Item 1';

//LASTCHILD//
//console.log(itemList.lastChild); //returns the last text node

//LASTELEMENTCHILD//
//console.log(itemList.lastElementChild); //gives li of last element
itemList.lastElementChild.style.backgroundColor = 'yellow';

//NEXTSIBLING//
// console.log(itemList.nextSibling); //gives text node

//NEXTELEMENTSIBLING//
// console.log(itemList.nextElementSibling);

//PREVIOUSSIBLING//
// console.log(itemList.previousSibling);

//PREVIOUSELEMENTSIBLING//
//console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green';

//CREATE ELEMENT//
var newDiv = document.createElement('div');
newDiv.className = 'hello';
newDiv.id = 'hello 1';
newDiv.setAttribute('title','hello div');

var newDivText = document.createTextNode('Hello World');

newDiv.appendChild(newDivText);

//the things done exist in javascript not in dom//
//so to put it right bellow the first heading into the dom//
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
console.log(newDiv);
newDiv.style.fontSize ='35px';
newDiv.style.fontWeight ='bold';
container.insertBefore(newDiv, h1);