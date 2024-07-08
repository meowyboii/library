//Initialize few books present in the library
const library = [
  {
    title: "The Lord of the Rings",
    author: "The Author",
    dateOfPublication: "2002-08-04",
    numberOfPages: 200,
    haveRead: false,
  },
  {
    title: "The Sea of Monsters",
    author: "The Author is an Author",
    dateOfPublication: "2002-08-04",
    numberOfPages: 200,
    haveRead: false,
  },
  {
    title: "The Great Gatsby",
    author: "The Author",
    dateOfPublication: "2002-08-04",
    numberOfPages: 200,
    haveRead: false,
  },
  {
    title: "The Lord of the Rings",
    author: "The Author",
    dateOfPublication: "2002-08-04",
    numberOfPages: 200,
    haveRead: false,
  },
  {
    title: "The Sea of Monsters",
    author: "The Author",
    dateOfPublication: "2002-08-04",
    numberOfPages: 200,
    haveRead: false,
  },
];

class Book {
  constructor(title, author, dateOfPublication, numberOfPages, haveRead) {
    this.title = title;
    this.author = author;
    this.dateOfPublication = dateOfPublication;
    this.numberOfPages = numberOfPages;
    this.haveRead = haveRead;
  }
}

const addBookForm = document.querySelector("#add-book-form");
const addBookButton = document.querySelector("#add-book");
const closeAddBook = document.querySelector("#close-add");

const bookInfo = document.querySelector("#book-info");
const removeBookButton = document.querySelector("#remove-book");
const closeBookInfo = document.querySelector("#close-book");

const bookContainers = document.querySelectorAll(".book-container");

//Show books available in library
document.addEventListener("DOMContentLoaded", function () {
  showBooks();
});

//Add book to the library
document.getElementById("book-form").addEventListener("submit", (e) => {
  const form = e.target;
  // Get the input values
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const dateOfPublication = document.getElementById("dateOfPublication").value;
  const numberOfPages = document.getElementById("numberOfPages").value;

  const book = new Book(title, author, dateOfPublication, numberOfPages, false);
  library.push(book);
  form.reset();
  console.log(book);
  showBooks();
});

const showBooks = () => {
  // Clear existing book elements

  bookContainers.forEach((container) => {
    container.innerHTML = "";
  });

  library.forEach((bookElement, index) => {
    const books = document.querySelectorAll(".book");

    const book = document.createElement("div");
    book.classList.add("book");
    const title = document.createElement("h4");
    title.textContent = `${bookElement.title}`;
    const author = document.createElement("h5");
    author.textContent = `${bookElement.author}`;
    const dateOfPublication = document.createElement("p");
    dateOfPublication.textContent = `${bookElement.dateOfPublication}`;
    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(dateOfPublication);

    book.setAttribute("data-index", index);

    let shelfIndex = 0;
    if (books.length > 11) {
      shelfIndex = 2;
    } else if (books.length > 5) {
      shelfIndex = 1;
    }
    console.log(books.length, shelfIndex);
    bookContainers[shelfIndex].appendChild(book);
  });
};

// "Show the dialog" button opens the dialog modally
addBookButton.addEventListener("click", () => {
  const books = document.querySelectorAll(".book");
  if (books.length >= 18) {
    alert(
      "The library is already full!\nRemove some books if you want to add another."
    );
  } else {
    addBookForm.showModal();
  }
});

// "Close" button closes the dialog
closeAddBook.addEventListener("click", () => {
  addBookForm.close();
});

let currentBookIndex = -1;

const openBookInfo = (event) => {
  // Check if the clicked element is inside a .book element
  const bookElement = event.target.closest(".book");
  if (bookElement) {
    currentBookIndex = bookElement.getAttribute("data-index");
    const currentBook = library[currentBookIndex];

    const title = document.querySelector("#book-content h3");
    title.textContent = `Title: ${currentBook.title}`;

    const author = document.querySelector("#book-content h4");
    author.textContent = `Author: ${currentBook.author}`;

    const paragraphs = document.querySelectorAll("#book-content p");

    const dateOfPublication = paragraphs[0];
    dateOfPublication.textContent = `Date of Publication: ${currentBook.dateOfPublication}`;

    const numberOfPages = paragraphs[1];
    numberOfPages.textContent = `Number of Pages: ${currentBook.numberOfPages}`;

    bookInfo.showModal();
  }
};

bookContainers.forEach((container) => {
  // Attach event listener to each child with class "book"
  container.addEventListener("click", openBookInfo);
});

//Remove a book in the library array given an index
removeBookButton.addEventListener("click", (e) => {
  if (currentBookIndex > -1 && currentBookIndex < library.length) {
    library.splice(currentBookIndex, 1);
    currentBookIndex = -1; // Reset the current book index
    bookInfo.close();
    showBooks(); // Refresh the list of books
  }
});

// "Close" button closes the dialog
closeBookInfo.addEventListener("click", () => {
  bookInfo.close();
});
