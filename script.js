const libraryContainer = document.querySelector('.libraryContainer');
const addBtn = document.getElementById('add-btn');

let myLibrary = [];

function Book(title, author, pages) {
    return {title, author, pages}
}

function addBookToLibrary() {
    userBook = Book(title, author, pages);
    myLibrary.push(userBook);
    displayBooks();
}

function displayBooks() {
    // loop through library array and display the books
    libraryContainer.innerHTML = '';
    return myLibrary.forEach((element) => {
        const container = document.createElement('div');
        container.classList.add('book');
        container.innerHTML = `<span class="title">${element.title}</span>
            <span class="author">${element.author}</span><span></span>
            <span class="pages">${element.pages} pgs</span>`;
        libraryContainer.appendChild(container);
    });
}

 function createBook() {
     form.style.display = true; 
 }

// function toggleReadStatus(book) {
//     book.hasRead === true ? false : true;
// }

addBtn.addEventListener('click', addBookToLibrary);
