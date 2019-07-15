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
  const numOfPages = Math.floor(list.length / itemsPerPage);
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
    a[0].className = 'active';
    li.appendChild(a);

    // When the button is clicked, that buttons class is changed to active and all other buttons have the active class removed.
    a.addEventListener('click', (e) => {
      e.target.className = 'active'
      for (let i = 0; i < numOfPages; i++) {
        a[i].className = '';
      }
      showPage(listItems, e.textContent)
    });

  }
}



appendPageLinks(listItems);

/***
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/





// Remember to delete the comments that came with this file, and replace them with your own code comments.
