const deleteBtn = document.querySelectorAll("button.delete");
const save = document.querySelector("button.save");
const updateBook = document.querySelector("button#updateBook");
const dialog = document.querySelector("dialog.addBook")
const output = document.querySelector('div.output');


updateBook.addEventListener('click', ()=>{
    dialog.showModal();
    console.log("clicked")
    console.log(dialog.showModal())
})

const myLibrary = [];

function Book(title, author,pages,read){
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
      }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID()
    this.info = function (){
     return`${this.title} by ${this.author}, ${this.pages}, ${this.read}.`;
    };
}


const theHobbit = new Book("The Hobbit","J.R.R Tolkien","295 pages","not read yet");
console.log(theHobbit.info())

function addBookToLibrary(newBook) {

    newBook = new Book("The Hobbit","J.R.R Tolkien","295 pages","not read yet");
    return myLibrary.push(newBook);  
  }

  addBookToLibrary('The Hobbit');
  addBookToLibrary('Lolz');
  console.log(myLibrary);
  
  function display(){
  let arrayLenght = myLibrary.length;
  for(let i = 0; i < arrayLenght; i++){
    displayElements();
  }

}
display()

function createElement(type,className){
    const element = document.createElement(type);
    element.classList.add(className);
    return element;
}

function displayElements(){
const card = createElement("div",'card');
    output.appendChild(card);
const delBtn = createElement("div",'delBtn');
    card.appendChild(delBtn);
let del = createElement("button",'delete');
    del.textContent = "x";
    delBtn.appendChild(del);
const content = createElement("div",'content');
    card.appendChild(content);
const ulBook = createElement("ul",'ulBook');
    content.appendChild(ulBook);
const title = createElement("li",'title');
    ulBook.appendChild(title);
    title.textContent = `${myLibrary.title}`;
const author = createElement("li",'author');
    ulBook.appendChild(author);
const pages = createElement("li",'pages');
    ulBook.appendChild(pages);
const read = createElement("li",'read');
    ulBook.appendChild(read);
}




