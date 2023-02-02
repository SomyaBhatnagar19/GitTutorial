//adding to the form so geting hold of the form 
let form = document.getElementById('addForm');
//putting id of items in variable
let itemList = document.getElementById('items');

//form submit event
form.addEventListener('submit', addItem);

//adding the edit button
for(let i=0; i<itemList.length; i++) {
  let edit = document.createElement('button');
  edit.className ='btn btn-sm float-right edit';
  edit.appendChild(document.createTextNode('EDIT'));
  itemList[i].appendChild(edit);
}

//add item function
function addItem(e) {
  e.preventDefault();

  //get input value 
  let newItem = document.getElementById('input').value;
  let newItemDescription = document.getElementById('input-2').value;
  //create new li for added new element
  let li = document.createElement('li');
  //add classname to the new li
  li.className = 'list-group-item';
  //console.log(li);
  //add text node with input value
  li.appendChild(document.createTextNode(newItem));  
  li.appendChild(document.createTextNode(newItemDescription));
  //creating delete button for the new li in list
  let deleteBtn = document.createElement('button');
  //add class to delete button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  //append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  //append button to li
  li.appendChild(deleteBtn);
  itemList.appendChild(li);
}

//Deleteing an event or removing item
itemList.addEventListener('click', removeItem);

//funciton to remove item
function removeItem(e) {
  if(e.target.classList.contains('delete')) {
    if(confirm('Are you sure?')){
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

//filter the items//
let filter = document.getElementById('filter');

//filter event//
filter.addEventListener('keyup', filterItems);

//filter function//
function filterItems(e) {
  //converting the searchh to lowercase
  let text = e.target.value.toLowerCase();
  //to get li from th list
  let items = itemList.getElementsByTagName('li');
  
  //converting html collection to an array for using its functions
  Array.from(items).forEach(function(item){
    let itemName = item.firstChild.textContent;
    let description = item.childNode[1].textContent;
    console.log(description);
    if(itemName.toLowerCase().indexOf(text) !=-1 || description.toLowerCase().indexOf(text) !=-1){
      item.style.display ='block';
    } else{
      item.style.display ='none';
    }
  })
}

