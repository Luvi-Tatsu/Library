 const form = document.querySelector("form");
 const dialog = document.querySelector("dialog.addBook")
 const output = document.querySelector('div.output');
// const card = document.querySelector('div.card');
// const delBtn = document.querySelector('div.delBtn');
 const deleteBtn = document.querySelectorAll("button.delete");
// const content = document.querySelector('div.content');
// const ulBook = document.querySelector("ul.book");
// const title = document.querySelector('li.title');
// const author = document.querySelector('li.author');
// const pages = document.querySelector('li.pages');
// const read = document.querySelector('read');

updateBook.addEventListener('click', ()=>{
    dialog.showModal();
})

const myLibrary = [];

function Book(title, author, pages, read){
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
      }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    //this.id = crypto.randomUUID();
}

function addBookToLibrary() {
  let title = document.querySelector("input#title").value;
  let author = document.querySelector("input#author").value;
  let pages = document.querySelector("input#page").value;
  let read = document.querySelector("input#checkbox").value;
  let newBook = new Book(title, author,pages, read);
  return myLibrary.push(newBook);
  }

  
form.addEventListener("submit", (e)=>{
  e.preventDefault();
  addBookToLibrary();
  showBook()
  dialog.close();
  form.reset();
})

function showBook(){
  const lastItem = myLibrary[myLibrary.length-1];
  const showItems = createLists(lastItem.title,lastItem.author,lastItem.page,lastItem.read);
  console.log(showItems)
}

function createTable() {
  let card = document.createElement("div");
  card.classList = 'card';
  output.append(card);
  let content = document.createElement("div");
    content.classList = 'content';
   card.append(content);
  let ulBook = document.createElement('ul');
   ulBook.classList = 'book';
   content.appendChild(ulBook);
   return ulBook;
}

function createLists(title,author,pages,read){
  let ulBook = createTable();
  let myTitle = document.createElement("li");
  myTitle.classList = 'title';
  myTitle.textContent = ` ${title}`;
  let myAuthor = document.createElement("li");
  myAuthor.classList = 'author';
  myAuthor.textContent = ` ${author}`;
  let myPage = document.createElement("li");
  myPage.classList = 'pages';
  myPage.textContent = ` ${pages}`;
  let myRead = document.createElement("li");
  myRead.classList = 'read';
  myRead.textContent = ` ${read}`;
  ulBook.append(myTitle,myAuthor,myPage,myRead);
}

deleteBtn.forEach((deleteBtn)=>{
    deleteBtn.addEventListener("click", ()=>{
    let display = deleteBtn.parentElement.parentElement;
    console.log(display);
    deleteBtn.parentElement.parentElement.remove();
})
})