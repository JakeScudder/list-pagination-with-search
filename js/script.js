/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


//Global variables for list items and number of items per page

const listItems = document.getElementsByClassName('student-item cf');
const itemsPerPage = 10

//Function to limit the number of page items shown to 10.
function showPage(list, page) {
  const startIndex = (page * itemsPerPage) - itemsPerPage;
  const endIndex = page * itemsPerPage
  for (let i = 1; i < list.length; i++) {
    if (i >= startIndex && i <= endIndex) {
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
  div.className = 'pagination';
  let paginationClass = document.querySelector('.pagination');


  pageDiv.appendChild(div);
  const ul = document.createElement('ul');
  ul.className = 'exists';

//Trying to erase ul elements if they already exist
  if (document.body.contains(document.querySelector('.exists'))) {
    paginationClass.remove(document.querySelector('.exists'));
  }
  div.appendChild(ul);


  //For loop to create button based on the number of pages.  It then creates an li and anchor element for each page
  for (let i = 1; i <= numOfPages; i++) {
    const li = document.createElement('li');
    ul.appendChild(li);
    const a = document.createElement('a');
    a.href = '#'
    a.textContent = i
    //If statement to make the first button active
    if (i === 1) {
      a.className = 'active';
    }
    li.appendChild(a);

    //Event Listener to go to the index page that is clicked and to remove the active class from all other anchor elements
    a.addEventListener('click', (e) => {
      let activeClass = document.querySelector(".active");
      activeClass.classList.remove("active");

      //Adds active class to the target
      e.target.className = 'active'

    // Call showPage to display the page clicked
    showPage(listItems, e.target.textContent);
    });
  }
}

//Call function to get clickable buttons at bottom of webpage
appendPageLinks(listItems);

//Creating the HTML for where the searchBar will be placed
const searchDiv = document.createElement('div');
searchDiv.className = 'student-search';
const divHeader = document.getElementsByClassName('page-header cf')[0];
divHeader.appendChild(searchDiv);
const searchInput = document.createElement('input');
searchInput.placeholder = 'Search for students...';
searchInput.className = 'search-input'
searchDiv.appendChild(searchInput);
const searchSubmitButton = document.createElement('button');
searchSubmitButton.textContent = 'Search';
searchDiv.appendChild(searchSubmitButton);


//Function to compare search input to the list of names
function searchBar(searchInput, list) {
  let matchArray = [];
  for (let i  = 0; i <= list.length; i++) {
    if (searchInput.value.length !== 0 && list[i].textContent.toLowerCase().includes(searchInput.value.toLowerCase())) {
      matchArray.push(list[i]);
      const matchPages = Math.ceil(matchArray.length / itemsPerPage);

      showPage(matchArray, matchPages);
      appendPageLinks(matchArray);
    }
  }
}

searchSubmitButton.addEventListener('click', (event) => {
  event.preventDefault();
  searchBar(searchInput, listItems);

  console.log('submit button working')
});

searchInput.addEventListener('keyup', () => {
  searchBar(searchInput, listItems);

  console.log('keyup event on search input functional')
});
