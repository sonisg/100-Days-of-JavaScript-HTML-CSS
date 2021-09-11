console.log("This is main page");
function Book(name, author, type) {
  this.name = name;
  this.author = author;
  this.type = type;
}

//display contructor
function Display() {}

//add methods to display prototype
Display.prototype.add = function (book) {
 // console.log("adding to UI");
  tableBody = document.getElementById("tableBody");
  let uiS = `<tr>
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td>${book.type}</td>
    </tr>`;
  tableBody.innerHTML += uiS;
};
Display.prototype.clear = function () {
  let libraryForm = document.getElementById("libraryForm");
  libraryForm.reset();
};
Display.prototype.validate = function (book) {
  if (book.name.length < 2 || book.author.length < 2) {
    return false;
  } else {
    return true;
  }
};
Display.prototype.show = function (type, dismessage) {
  let message = document.getElementById("message");
  let boldText;
  if(type==='Success')
  {
      boldText='SUCCESS';
  }
  else{
    boldText='ERROR!';
  }
  message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
<strong>${boldText}</strong> ${dismessage} 
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;
  setTimeout(() => {
    message.innerHTML = "";
  }, 5000);
};

//add submit event listener to form
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);
function libraryFormSubmit(e) {
  let name = document.getElementById("bookName").value;
  let author = document.getElementById("author").value;
  let fiction = document.getElementById("fiction");
  let programming = document.getElementById("programming");
  let cooking = document.getElementById("cooking");
  let type;
  if (fiction.checked) {
    type = fiction.value;
  } else if (programming.checked) {
    type = programming.value;
  } else if (cooking.checked) {
    type = cooking.value;
  }

  let book = new Book(name, author, type);
  console.log(book);
  let display = new Display();
  if (display.validate(book)) {
    display.add(book);
    display.clear();
    display.show("Success", "Your book has been successfully added");
  } else {
    display.show("Error", "Sorry you cannot add this book");
  }

  e.preventDefault();
}
