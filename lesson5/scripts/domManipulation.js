const input = document.querySelector('#item');
const button = document.querySelector('button');
const li = document.querySelector('.list');


button.addEventListener('click', () => {

  if (input.value === '') {
    document.getElementById('errorName').innerHTML = "Please, enter a scripture";
    value.focus();


    return false;
  } else {

    const newScripture = input.value;
    input.value = '';

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    listItem.appendChild(listText);
    listText.textContent = newScripture;
    listItem.appendChild(listBtn);
    listBtn.textContent = '';
    listBtn.textContent = 'X';
    li.appendChild(listItem);

    listBtn.addEventListener('click', () => {
      li.removeChild(listItem);
    });
  }
  input.focus()
});