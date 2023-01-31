//adding to the form so geting hold of the form 
let form = document.getElementById('addForm');
//putting id of items in variable
let itemList = document.getElementById('items');

//form submit event
form.addEventListener('submit', addItem);

//add item function
function addItem(e) {
  e.preventDefault();

  //get input value 
  let newItem = document.getElementById('input').value;

  //create new li for added new element
  let li = document.createElement('li');
  //add classname to the new li
  li.className = 'list-group-item';
  //console.log(li);
  //add text node with input value
  li.appendChild(document.createTextNode(newItem));  
  
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

//filtering items
let filter = document.getElementById('filter');

// Filter Items
function filterItems(e){
  // convert text to lowercase
  let text = e.target.value.toLowerCase();
  // Get lis
  let items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    let itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}