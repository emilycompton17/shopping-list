'use strict';
// enter items they need to purchase
// by entering text and hitting 'Return'
// or clicking 'Add Item' button

// function to add new item

function addNewItem() {

  $('form').submit(function (event) {
    event.preventDefault();

    let newItem = $('input').val();

    let newEntry = `<li>
      <span class="shopping-item">${newItem}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
      </li>`;

    $('.shopping-list').append(newEntry);

    // console.log(`added ${newItem}`);

    $('input:text').val('');

  });
}

$(addNewItem);


// check and uncheck items on list
// by clicking the 'check' button

// function to check items

function checkItems() {

  $('div').on('click', 'button.shopping-item-toggle', function (event) {

    console.log('clicked on a toggle button');

    event.stopPropagation();

    $(this).closest('li').children('span').toggleClass('shopping-item__checked');

  });
}

$(checkItems);


// permanently remove items from list

// function to delete items

function deleteItems() {

  $('div').on('click', 'button.shopping-item-delete', function () {
    
    console.log('clicked on a delete button');
    
    $(this).closest('li').remove();
  
  });
}

$(deleteItems);