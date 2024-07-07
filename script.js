const library = [];

function Book(title, author, dateOfPublication, numberOfPages, haveRead) {
  this.title = title;
  this.author = author;
  this.dateOfPublication = dateOfPublication;
  this.numberOfPages = numberOfPages;
  this.haveRead = haveRead;
}

//Add book
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
});

const showBooks = () => {
  const book = document.createElement("div");
  book.style.cssText = "color: blue; background: white;";
  book.classList.add("book");
  book.textContent("New Book");
};

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("#add-book");
const closeButton = document.querySelector("dialog button");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});
