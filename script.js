
var list = document.querySelector('.output ul');
var totalBox = document.querySelector('.output p');
var total = 0;
list.innerHTML = '';
totalBox.textContent = '';
var products = [ 'Underpants:6.99','Socks:5.99','T-shirt:14.99','Trousers:31.99','Shoes:23.99'];
               
for (var i = 0; i < products.length; i++) { // number 2
  // number 3
  var newState = products.split(":");
  var names = newState[0],[2],[4],[6],[8];
  var prices = newState[1],[3],[5],[7],[9];
  var numbers = Number(prices);
  // number 4
 total = numbers+1;
  // number 5
  itemText =  "nombre de elemnto actual + ":" + ${names} — $precio de elemento actual" + ": " + ${numbers};

  var listItem = document.createElement('li');
  listItem.textContent = itemText;
  list.appendChild(listItem);
}

totalBox.textContent = 'Total: $' + total.toFixed(2);