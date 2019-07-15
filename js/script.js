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
  div.className = 'pagination';
  pageDiv.appendChild(div);
  const ul = document.createElement('ul');
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
      //Code adapted from https://stackoverflow.com/questions/38990163/how-can-i-add-and-remove-an-active-class-to-an-element-in-pure-javascript
      //Remove the active class
      let activeClass = document.querySelector(".active");
      if(activeClass !==null){
      activeClass.classList.remove("active");
      }

      //Adds active class to the target
      e.target.className = 'active'

    // Call showPage to display the page clicked
    showPage(listItems, e.target.textContent);
    });
  }
}

//Call function to get clickable buttons at bottom of webpage
appendPageLinks(listItems);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
