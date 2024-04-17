class Author {
  constructor(NameAuth, email) {
    this.NameAuth = NameAuth;
    this.email = email;
  }
}

class Book extends Author {
  constructor(NameAuth, email, name, price) {
    super(NameAuth, email);
    this.name = name;
    this.price = price;
  }
}
var arr = [];


document.addEventListener("DOMContentLoaded", function () {
  var numberInput = document.getElementById("validationServer06");
  var numberFeedback = document.getElementById("validationServer06Feedback");

  numberInput.addEventListener("input", function () {
    var numberOfBooks = parseInt(numberInput.value);

    if (numberOfBooks >= 1) {
      numberInput.classList.remove("is-invalid");
      numberInput.classList.add("is-valid");
      numberFeedback.style.display = "none";

    } else {
      numberInput.classList.remove("is-valid");
      numberInput.classList.add("is-invalid");
      numberFeedback.style.display = "block";
    }
  });
});

var numOfBooks = 0;
var BooksForm = document.getElementsByClassName("addBooks")[0];
var addNumber = document.getElementsByClassName("addNum")[0];
var Checkk = document.getElementById("checkk");

function AddNum() {
  var numberInput = document.getElementById("validationServer06").value;

  if (numberInput === "" || numberInput < 0) {
    Checkk.style.opacity = 1;

  }
  else {
    var numberInput = document.getElementById("validationServer06");
    var number = parseInt(numberInput.value);


    numOfBooks = number;
    addNumber.style.display = "none";
    BooksForm.style.display = "block";
  }
}

var bookNameInput = document.getElementById("bookName");
var priceInput = document.getElementById("price");
var authorNameInput = document.getElementById("authorName");
var emailInput = document.getElementById("email");
document.addEventListener("DOMContentLoaded", function () {

  var bookNameInput = document.getElementById("bookName");
  var priceInput = document.getElementById("price");
  var authorNameInput = document.getElementById("authorName");
  var emailInput = document.getElementById("email");
  bookNameInput.addEventListener("input", function () {
    validateField(bookNameInput, "bookNameFeedback");
  });

  priceInput.addEventListener("input", function () {
    validatePrice(priceInput, "priceFeedback");
  });

  authorNameInput.addEventListener("input", function () {
    validateField(authorNameInput, "authorNameFeedback");
  });

  emailInput.addEventListener("input", function () {
    validateEmail(emailInput, "emailFeedback");
  });

  function validateField(input, feedbackId) {
    if (input.checkValidity()) {
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
      document.getElementById(feedbackId).style.display = "none";
    } else {
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
      document.getElementById(feedbackId).style.display = "block";
    }
  }

  function validatePrice(input, feedbackId) {
    if (input.checkValidity() && parseInt(input.value) >= 1) {
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
      document.getElementById(feedbackId).style.display = "none";
    } else {
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
      document.getElementById(feedbackId).style.display = "block";
    }
  }

  function validateEmail(input, feedbackId) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(input.value)) {
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
      document.getElementById(feedbackId).style.display = "none";

    } else {
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
      document.getElementById(feedbackId).style.display = "block";
    }
  }
});
let i = 0;
var table = document.getElementById("ShowTable");
var Check = document.getElementById("check");

function AddBook() {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var bookName = document.getElementById("bookName");
  var price = document.getElementById("price");
  var Author = document.getElementById("authorName");
  var Email = document.getElementById("email");
  if (bookName.value === "" || Email.value === "" || price.value === "" || Author.value === "" || !emailRegex.test(Email.value)) {
    Check.style.opacity = 1;


  }
  else {


    let book = new Book(
      Author.value,
      Email.value,
      bookName.value,
      price.value
    )
    arr.push(book);
    i++;
    Author.value = "";
    Email.value = "";
    bookName.value = "";
    price.value = "";
    bookName.classList.remove("is-valid", "is-invalid");
    price.classList.remove("is-valid", "is-invalid");
    Author.classList.remove("is-valid", "is-invalid");
    Email.classList.remove("is-valid", "is-invalid");
    Check.style.opacity = 0;

  }
  if (i == numOfBooks) {
    BooksForm.style.display = "none";
    table.style.display = "block";
    for (let y = 0; y < arr.length; y++) {
      document.getElementById("TableBody").innerHTML +=
        `
                <tr id ="tr${y}" >
                    <td class="${y}" >${arr[y].name}</td>
                    <td class="${y}" >${arr[y].price} $</td>
                    <td class="${y}" >${arr[y].NameAuth}</td>
                    <td class="${y}" >${arr[y].email}</td>
                    <td class="TBtn${y}">
                        <button  onclick="EditBook(${y})" class="${y}" id="Editbtn">
                            Edit
                        </button>
                        <button  onclick="delBook(${y})" class="${y}" id="Deletebtn">
                            Delete
                        </button>
                        <button  onclick="saveBook(${y})" class="${y}" id="savebtn">
                            Save
                        </button>
                        <button onclick="closeBook(${y})"  class="${y}" id="closebtn">
                            close
                        </button> 
                    </td>
                </tr>
                `
    };
  }
}

function EditBook(x) {

  document.getElementById("tr" + x).innerHTML = `
  <td > <input  required type="text" id="NameBook" class="form-control ${ x }" placeholder="Name Of Book" value ="${ arr[ x ].name }"/></td>
  <td ><input required type="text" id="Price" class="form-control ${ x }" placeholder="Price" value ="${ arr[ x ].price }" /></td>
  <td ><input  required type="text" id="Author" class="form-control ${ x }" placeholder="Author Name" value ="${ arr[ x ].NameAuth }"/></td>
  <td ><input required type="email" id="E-mail" class="form-control ${ x }" placeholder="Author's E-mail" value ="${ arr[ x ].email }"/></td>
    <td class="TBtn${x}">
                    <button  onclick="EditBook(${x})" class="${x}" id="Editbtn">
                        Edit
                    </button>
                    <button  onclick="delBook(${x})" class="${x}" id="Deletebtn">
                        Delete
                    </button>
                    <button  onclick="saveBook(${x})" class="${x}" id="savebtn">
                        Save
                    </button>
                    <button onclick="closeBook(${x})" class="${x}"  id="closebtn">
                        close
                    </button>
                </td>
            </tr>`

  let Edit = document.getElementsByClassName(x)[4];
  let del = document.getElementsByClassName(x)[5];
  Edit.style.display = "none";
  del.style.display = "none";
  let clsBtn = document.getElementsByClassName(x)[7];
  let saveBtn = document.getElementsByClassName(x)[6];
  saveBtn.style.display = "block";
  clsBtn.style.display = "block";
  let TablButtons = document.getElementsByClassName("TBtn" + x)[0];

  TablButtons.style.width = "100%";
  TablButtons.style.display = "flex";
  TablButtons.style.borderBottom = "0px";
  TablButtons.style.justifyContent = "space-evenly";
}


function saveBook(z) {
  arr[z].name = document.getElementsByClassName(z)[0].value;
  arr[z].price = document.getElementsByClassName(z)[1].value;
  arr[z].NameAuth = document.getElementsByClassName(z)[2].value;
  arr[z].email = document.getElementsByClassName(z)[3].value;

  document.getElementById("tr" + z).innerHTML = `
    <td class="${z}" > ${arr[z].name}</td >
    <td class="${z}" >${arr[z].price} $</td>
    <td class="${z}" >${arr[z].NameAuth}</td>
    <td class="${z}" >${arr[z].email}</td>
    <td class="TBtn${z}">
                    <button  onclick="EditBook(${z})" class="${z}" id="Editbtn" >
                        Edit
                    </button>
                    <button  onclick="delBook(${z})" class="${z}" id="Deletebtn">
                        Delete
                    </button>
                    <button  onclick="saveBook(${z})" class="${z}" id="savebtn">
                        Save
                    </button>
                    <button  onclick="closeBook(${z})" class="${z}" id="closebtn">
                        close
                    </button>
                </td>`

  let saveBtn = document.getElementsByClassName(z)[6];
  let clsBtn = document.getElementsByClassName(z)[7];
  saveBtn.style.display = "none";
  clsBtn.style.display = "none";
  let Edit = document.getElementsByClassName(z)[4];
  let del = document.getElementsByClassName(z)[5];
  Edit.style.display = "block";
  del.style.display = "block";
  let TablButtons = document.getElementsByClassName("TBtn" + z)[0];

  TablButtons.style.width = "100%";
  TablButtons.style.display = "flex";
  TablButtons.style.borderBottom = "0px";
  TablButtons.style.justifyContent = "space-evenly";
}


function closeBook(z) {
  document.getElementById("tr" + z).innerHTML = `
    <td class="${z}" > ${arr[z].name}</td >
    <td class="${z}" >${arr[z].price} $</td>
    <td class="${z}" >${arr[z].NameAuth}</td>
    <td class="${z}" >${arr[z].email}</td>
    <td class="TBtn${z}" >
                    <button  onclick="EditBook(${z})" class="${z}" id="Editbtn">
                        Edit
                    </button>
                    <button  onclick="delBook(${z})" class="${z}" id="Deletebtn">
                        Delete
                    </button>
                    <button  onclick="saveBook(${z})" class="${z}" id="savebtn">
                        Save
                    </button>
                    <button  onclick="closeBook(${z})"  class="${z}" id="closebtn">
                        close
                    </button>
                </td>`
  let clsBtn = document.getElementsByClassName(z)[7];
  let saveBtn = document.getElementsByClassName(z)[6];
  saveBtn.style.display = "none";
  clsBtn.style.display = "none";
  let Edit = document.getElementsByClassName(z)[4];
  let del = document.getElementsByClassName(z)[5];
  Edit.style.display = "block";
  del.style.display = "block";
  let TablButtons = document.getElementsByClassName("TBtn" + z)[0];

  TablButtons.style.width = "100%";
  TablButtons.style.display = "flex";
  TablButtons.style.borderBottom = "0px";
  TablButtons.style.justifyContent = "space-evenly";



}

function delBook(z) {
  arr.splice(z, 1);
  document.getElementById(`tr${z}`).remove();
}



