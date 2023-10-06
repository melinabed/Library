const myLibrary = [];

// the contructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

//grabs contructor and applies to toggleRead function
Book.prototype.toggleRead = function() {
    this.read = !this.read;
}

function toggleRead(index) {
    myLibrary[index].toggleRead();
    render();
}

// grabs the cards div and applies new element
// uses dom to create a class for book-card
function render() {
    let libraryEl = document.querySelector("#cards");
    libraryEl.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookEl = document.createElement("div");
        bookEl.setAttribute("class", "book-card");
        bookEl.innerHTML = `
            <div class="card-header">
            <h3 class="title">${book.title}</h3>
            <h5 class="author">by ${book.author}</h5>
            </div>
            <div class="card-body">
            <p>${book.pages} pages</p>
            <p class="read-status">${book.read ? "Read" : "Not Read Yet"}</p>
            <button class="remove" onclick="removeBook(${i})">Remove</button>
            <button class="toggle-read-btn" onclick="toggleRead(${i})">Toggle Read</button>
            </div>
            `;
        libraryEl.appendChild(bookEl);
    }
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    render();
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
    form.style.display = "block";
})

// applies click listener to submit button and calls the addBooktoLibrary function
document.querySelector("#submit").addEventListener('click', function(event) {
    event.preventDefault();
    addBookToLibrary();
})

