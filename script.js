const libraryContainer = document.querySelector('.libraryContainer');
const addBtn = document.getElementById('add-btn');

let myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary() {
    const userBook = new Book(prompt('Title: '), prompt('Author: '), prompt('Pages: '));
    myLibrary.push(userBook);
    displayBooks();
}

function displayBooks() {
    // loop through library array and display the books
    libraryContainer.innerHTML = '';
    return myLibrary.forEach((element) => {
        const container = document.createElement('div');
        container.classList.add('book');
        container.innerText = `${element.title}\n${element.author}\n${element.pages}`;
        libraryContainer.appendChild(container);
    });
}

function toggleReadStatus(book) {
    book.hasRead === true ? false : true;
}

addBtn.addEventListener('click', addBookToLibrary);
