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

function getFormInput() {
    const newTitle = document.getElementById('new-title').value;
    const newAuthor = document.getElementById('new-author').value;
    const newPages = document.getElementById('new-pages').value;
    const newReadStatus = document.getElementById('new-read-status').checked;
    if (!newTitle || !newAuthor) {
        alert('Title and Author required'); 
        clearModal();
        return modal.style.display = 'block';
    }
    return new Book(newTitle, newAuthor, newPages, newReadStatus);
}

function addBookToLibrary() {
    const newBook = getFormInput();
    myLibrary.push(newBook);
    clearModal();
    refreshLibraryDisplay();
}

function refreshLibraryDisplay() {
    // loop through library array and display the books
    libraryContainer.innerHTML = '';
    return myLibrary.forEach((element) => {
        // individual divs for each value to make styling easier
        const card = document.createElement('div'); 
            card.classList.add('card');
            // card.dataset.cardNumber = myLibrary.indexOf(element);
        const deleteBtn = document.createElement('div');
            deleteBtn.innerText = '×';
            deleteBtn.classList.add('delete-btn');
        const title = document.createElement('div'); 
            title.classList.add('card-title');
            title.textContent = element.title;
        const author = document.createElement('div'); 
            author.classList.add('card-author');
            author.textContent = element.author;
        const pages = document.createElement('div'); 
            pages.classList.add('card-pages');
            // add ' pgs' after pages value if it isn't falsy
            (element.pages) ? (pages.innerText = element.pages + ' pgs') : (pages.innerText = element.pages);
        const readIndicator = document.createElement('div');
            readIndicator.classList.add('read-indicator');
            if (element.hasRead) {
                readIndicator.innerText = 'read';
            } else {
                readIndicator.innerText = 'not read'
            }
        // associate each element with respective book in array
        const book = myLibrary[myLibrary.indexOf(element)];
        if (!book.hasRead) card.style.backgroundColor = 'lightgray';
        card.addEventListener('click', () => {
            book.hasRead === true ? book.hasRead = false : book.hasRead = true;
            refreshLibraryDisplay();
        });
        deleteBtn.addEventListener('click', (e) => {
            console.log(e.target.closest('.card'));
            myLibrary.splice(myLibrary.indexOf(element), 1)
            refreshLibraryDisplay();
        });
        card.append(deleteBtn, title, author, pages, readIndicator);
        libraryContainer.appendChild(card);
    });
}

// open, close, and submit modal
addBtn.addEventListener('click', () => modal.style.display = 'block');
window.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
});
modalAddBookBtn.addEventListener('click', addBookToLibrary);
