let myLibrary = [];

// the contructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// grabs the cards div and applies new element
function render() {
    let libraryEl = document.querySelector("#cards");
    libraryEl.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookEl = document.createElement("div");
        bookEl.innerHTML = `<p>${book.title}</p>`
        libraryEl.appendChild(bookEl);
    }
}


// do stuff here
function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;
    let addBook = new Book(title, author, pages, read);
    myLibrary.push(addBook);
    render();  
}

// grabs the button and displays form when clicked
let newBook = document.querySelector("#new");
newBook.addEventListener('click', function() {
    let form = document.querySelector("#book-info");
    form.style.display = "flex";
})

// applies click listener to submit button and calls the addBooktoLibrary function
document.querySelector("#submit").addEventListener('click', function(event) {
    event.preventDefault();
    addBookToLibrary();
})

