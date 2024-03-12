const userInput = document.querySelectorAll('input');
const expenseDate = document.getElementById('expense-date');
const expenseDescription = document.getElementById('expense-description');
const expenseLocation = document.getElementById('expense-location');
const expenseAmount = document.getElementById('expense-amount');

document.getElementById('submit-expense').addEventListener('click', (e) => {
  e.preventDefault();

  for (i = 0; i < userInput.length; i++) {
    console.log('input field value ', userInput);
    if (userInput[i].value !== '') {
      addExpense();
    } else {
      alert('Please fill out all fields before clicking submit.');
      return;
    }
  }
});

function addExpense() {
  createExpense();
  resetUserInput();
  document.getElementById('form').reset();
}

function createExpense() {
  const newExpense = document.createElement('tr');

  const expenseDateCell = document.createElement('td');
  expenseDateCell.textContent = expenseDate.value;
  newExpense.appendChild(expenseDateCell);

  const expenseDescriptionCell = document.createElement('td');
  expenseDescriptionCell.textContent = expenseDescription.value;
  newExpense.appendChild(expenseDescriptionCell);

  const expenseLocationCell = document.createElement('td');
  expenseLocationCell.textContent = expenseLocation.value;
  newExpense.appendChild(expenseLocationCell);

  const expenseAmountCell = document.createElement('td');
  expenseAmountCell.textContent = `$${expenseAmount.value}.00`;
  newExpense.appendChild(expenseAmountCell);

  const deleteButtonCell = document.createElement('td');
  newExpense.appendChild(deleteButtonCell);

  const deleteButton = document.createElement('img');
  deleteButton.src = 'images/new_trash.svg';
  deleteButtonCell.appendChild(deleteButton);

  deleteButton.addEventListener('click', () => newExpense.remove());

  document.getElementById('tracker-body').appendChild(newExpense);
}

function resetUserInput() {
  let eachInput;
  for (eachInput = 0; eachInput < userInput.length - 1; eachInput++) {
    userInput[eachInput].value = '';
  }
}
