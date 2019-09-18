/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/


//Global variables for list items and number of items per page
const listItems = document.getElementsByClassName('student-item cf');
const itemsPerPage = 10

//Function to limit the number of page items shown to 10.
function showPage(list, page) {
  const startIndex = (page * itemsPerPage) - itemsPerPage;
  const endIndex = page * itemsPerPage
  for (let i = 0; i < list.length; i++) {
    if (i >= startIndex && i < endIndex) {
      list[i].style.display = 'block';
    } else {
      list[i].style.display = 'none';
    }
  }
}

//Initial function call to display webpage
showPage(listItems, 1);

//Function to add page links at the bottom of the webpage
function appendPageLinks(list){
  const numOfPages = Math.ceil(list.length / itemsPerPage);
  const div = document.createElement('div')
  let pageDiv = document.querySelector('.page');
  let paginationClass = document.querySelector('.pagination');
  const ul = document.createElement('ul');
  div.className = 'pagination';
  ul.className = 'exists';

  //Erasing the ul elements if they already exist
  if (document.body.contains(document.querySelector('.exists'))) {
    paginationClass.remove(document.querySelector('.exists'));
  }

  pageDiv.appendChild(div);
  div.appendChild(ul);



  //For loop to create button based on the number of pages.  It then creates an li and anchor element for each page
  for (let i = 1; i <= numOfPages; i++) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#'
    a.textContent = i
    //If statement to make the first button active
    if (i === 1) {
      a.className = 'active';
    }
    ul.appendChild(li);
    li.appendChild(a);

    //Event Listener to go to the index page that is clicked and to remove the active class from all other anchor elements
    a.addEventListener('click', (e) => {
      let activeClass = document.querySelector(".active");
      activeClass.classList.remove("active");
      //Adds active class to the target
      e.target.className = 'active'

      // Call showPage to display the page clicked
      showPage(list, e.target.textContent);
    });
  }
}

//Call function to get clickable buttons at bottom of webpage
appendPageLinks(listItems);

//Creating the HTML for where the searchBar will be placed
const searchDiv = document.createElement('div');
const divHeader = document.getElementsByClassName('page-header cf')[0];
const searchInput = document.createElement('input');
const searchSubmitButton = document.createElement('button');
const noResults = document.createElement('h3');
searchDiv.className = 'student-search';
searchInput.placeholder = 'Search for students...';
searchInput.className = 'search-input'
searchSubmitButton.textContent = 'Search';
noResults.id = "padding"
divHeader.appendChild(searchDiv);
searchDiv.appendChild(searchInput);
searchDiv.appendChild(searchSubmitButton);

//Function to compare search input to the list of names
function searchBar(searchInput, list) {
  let matchArray = [];
  for (let i  = 0; i < list.length; i++) {
    list[i].style.display = 'none';
    //Conditional statement to load the webpage normally if the searchBar has no value
    if (searchInput.value.length === 0) {
      noResults.textContent = '';
    }
    //Conditional to find the name from the list of names
    if (list[i].children[0].children[1].textContent.toLowerCase().includes(searchInput.value.toLowerCase())) {
      matchArray.push(list[i]);
      //Erase no results if there is a matching name
      noResults.textContent = '';
    }
  //Conditional to say No results if the name is not in the list
  }
  if (matchArray.length === 0 && searchInput.value.length !== 0) {
    noResults.textContent = 'Sorry, No Results Found';
    searchDiv.appendChild(noResults);
  } else {
  showPage(matchArray, 1);
  appendPageLinks(matchArray);
  }
}

//Event listeners for the search Bar
searchSubmitButton.addEventListener('click', (event) => {
  event.preventDefault();
  searchBar(searchInput, listItems);

  console.log('submit button working')
});

searchInput.addEventListener('keyup', () => {
  searchBar(searchInput, listItems);

  console.log('keyup event on search input functional')
});
