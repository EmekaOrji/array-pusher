var names = ['Wes Bos', 'Mosh Hamedani', 'Kevin Powell', 'Amit Sheen']; // Array
var listContainer = document.querySelector('ol');
var listItem;
var inputElement = document.querySelector('input');
var inputValue;
var button = document.querySelector('button');

function cleanupListContainer() {
  listContainer.innerHTML = '';
}

function updateList() {
  cleanupListContainer();
	names.forEach((e) => {
		listItem = document.createElement('li');
		listItem.textContent = e;
		listContainer.appendChild(listItem);
	});
}

button.addEventListener('click', function () { // When I click the button,
	inputValue = inputElement.value;             // the value of the input at that point is taken,
	names.push(inputValue);                      // then that value is added (via .push() method) to the list of names declared above.
	updateList();                                // After this I update the list to render the new value(name).
});

updateList();
