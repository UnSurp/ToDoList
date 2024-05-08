const list = document.getElementById('list');
const addForm = document.getElementById('add-form');
const input = document.getElementById('add-input');
const btnClear = document.getElementById('btnClear');

addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!input.value.trim()) return;

    const newItem = document.createElement('button');
    newItem.id = 'liItem';

    const btnDelete = document.createElement('button');
    btnDelete.id = 'btnItem'

    const crossBtn = document.createElement('img'); 
    crossBtn.src = "image/crossBtn.svg";
    crossBtn.id = 'imgBtnItem';

    const itemList = document.createElement('div');
    itemList.id = 'item';

    newItem.textContent = input.value.trim();
    itemList.appendChild(newItem);
    btnDelete.appendChild(crossBtn);
    itemList.appendChild(btnDelete);
    list.append(itemList);
    input.value = '';

    btnDelete.addEventListener('click', function(event) {
        itemList.remove();
    });

    newItem.addEventListener('click', function(event) {
        newItem.style.textDecorationLine = 'line-through';
        newItem.style.color = '#5c5c66';
        newItem.style.backgroundColor = '#5052667e';
    })
    
});

btnClear.addEventListener('click', function(event){
    list.innerHTML = '';
});