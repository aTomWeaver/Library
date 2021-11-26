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
    if (!newTitle || !newAuthor) {
        alert('Title and Author required'); 
        clearModal();
        return modal.style.display = 'block';
    }
    const newBook = new Book(newTitle, newAuthor, newPages, newReadStatus);
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
        card.appendChild(title);
        card.appendChild(author);
        card.appendChild(pages);
        libraryContainer.appendChild(card);
    });
}

// function toggleReadStatus(book) {
//     book.hasRead === true ? false : true;
// }

// open, close, and submit modal
addBtn.addEventListener('click', () => modal.style.display = 'block');
window.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
});
modalAddBookBtn.addEventListener('click', addBookToLibrary);
