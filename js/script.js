/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/***
   Add your global variables that store the DOM elements you will
   need to reference and/or manipulate.

   But be mindful of which variables should be global and which
   should be locally scoped to one of the two main functions you're
   going to create. A good general rule of thumb is if the variable
   will only be used inside of a function, then it can be locally
   scoped to that function.
***/
const listItems = document.getElementsByClassName('student-item cf');
const itemsPerPage = 10



/***
   Create the `showPage` function to hide all of the items in the
   list except for the ten you want to show.

   Pro Tips:
     - Keep in mind that with a list of 54 students, the last page
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when
       you initially define the function, and it acts as a variable
       or a placeholder to represent the actual function `argument`
       that will be passed into the parens later when you call or
       "invoke" the function
***/
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
  for (let i = 0; i <= numOfPages; i++) {
    const li = document.createElement('li');
    ul.appendChild(li);
    const a = document.createElement('a');
    a.href = '#'
    a.textContent = list[i]
    a[0].className = 'active';
    li.appendChild(a);

    // When the button is clicked, that buttons class is changed to active and all other buttons have the active class removed.
    a.addEventListener('click', (e) => {
      e.target.className = 'active'
      for (let i = 0; i < numOfPages; i++) {
        a.className = '';
      }
      showPage(listItems, e.textContent)
    });


  }
}

showPage(listItems, 1);

appendPageLinks(listItems);

/***
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/





// Remember to delete the comments that came with this file, and replace them with your own code comments.
