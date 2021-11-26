const libraryContainer = document.querySelector('.libraryContainer');
const addBtn = document.getElementById('add-btn');
const modal = document.querySelector('.modal');
const modalAddBookBtn = document.getElementById('add-book-btn');

let myLibrary = [];

class Book {
    constructor(title, author, pages, hasRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.hasRead = hasRead;
    }
}

function clearModal() {
    document.getElementById('new-title').value = '';
    document.getElementById('new-author').value = '';
    document.getElementById('new-pages').value = '';
    document.getElementById('new-read-status').checked = '';
    modal.style.display = 'none'
}

function addBookToLibrary() {
    const newTitle = document.getElementById('new-title').value;
    const newAuthor = document.getElementById('new-author').value;
    const newPages = document.getElementById('new-pages').value;
    const newReadStatus = document.getElementById('new-read-status').checked;
    const newBook = new Book(newTitle, newAuthor, newPages, newReadStatus);
    myLibrary.push(newBook);
    clearModal();
    refreshLibraryDisplay();
}

function refreshLibraryDisplay() {
    // loop through library array and display the books
    libraryContainer.innerHTML = '';
    return myLibrary.forEach((element) => {
        const container = document.createElement('div');
        container.classList.add('book');
        container.innerText = `${element.title}\n${element.author}\n${element.pages}\n${element.hasRead}`;
        libraryContainer.appendChild(container);
    });
}

function toggleReadStatus(book) {
    book.hasRead === true ? false : true;
}

// open, close, and submit modal
addBtn.addEventListener('click', () => modal.style.display = 'block');
window.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
});
modalAddBookBtn.addEventListener('click', addBookToLibrary);
