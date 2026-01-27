import { getList, addItem } from './model.js'


// UI
function refreshShoppingList(shoppingList) {
  const ul = document.querySelector('#shoppingList');

  // 1) delete UI
  ul.innerHTML = "";

  // 2) Loop over shooping and add items 1 by 1
  for (const item of shoppingList) {
    const li = document.createElement('li');
    li.textContent = item.name;
    if (item.picked) {
      li.classList.add('picked');
    }

    li.addEventListener('click', () => {
      item.picked = !item.picked;
      refreshShoppingList(getList());
    })

    ul.appendChild(li);
  }
}

// Controller
addEventListener("DOMContentLoaded", () => {
  refreshShoppingList(getList());


  document.querySelector('#btnAdd').addEventListener("click", () => {
    const input = document.querySelector('#inputNew')
    const newItemValue = input.value;
    // validate new item missing
    addItem(newItemValue);
    refreshShoppingList(getList());
    input.value = "";
  })

});
