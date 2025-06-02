const form = document.querySelector("form");
const dialog = document.querySelector("dialog.addBook")
const output = document.querySelector('div.output');

updateBook.addEventListener('click', ()=>{
 dialog.showModal();
})

cancel.addEventListener("click", (e)=>{
 e.preventDefault();
 form.reset();
 dialog.close();
})

form.addEventListener("submit", (e)=>{
 e.preventDefault();
 addBookToLibrary();
 showBook()
 dialog.close();
 form.reset();
})

let myLibrary = [];

function Book(title, author, pages, read){
   if (!new.target) {
       throw Error("You must use the 'new' operator to call the constructor");
     }
   this.title = title;
   this.author = author;
   this.pages = pages;
   this.read = read;
   this.id = crypto.randomUUID();
}

const firstBook = new Book('The Hobbit', 'J.R.R. Tolkien', '265', 'read');
myLibrary.push(firstBook);
createLists(myLibrary[0]);

function addBookToLibrary() {
 let title = document.querySelector("input#title").value;
 let author = document.querySelector("input#author").value;
 let pages = document.querySelector("input#pages").value;
 let read = document.querySelector("input#checkbox").checked;
 let newBook = new Book(title, author,pages, read);
 myLibrary.push(newBook);
 }


function showBook(){
 const lastItem = myLibrary[myLibrary.length-1];
 createLists(lastItem);
}

function createTable() {
 let card = document.createElement("div");
 let buttonContainer = document.createElement('div');
 let deleteBtn = document.createElement('button');
 let content = document.createElement("div");
 let ulBook = document.createElement('ul');
 card.classList = 'card';
 buttonContainer.classList = 'delBtn';
 deleteBtn.classList = 'delete';
 content.classList = 'content';
 ulBook.classList = 'book';
 output.append(card);
 card.append(buttonContainer);
 buttonContainer.append(deleteBtn);
 card.append(content);
 content.appendChild(ulBook);
 
 deleteBtn.textContent = 'x';
 let itemDelete = myLibrary.length-1;
 let list = myLibrary[itemDelete];
 deleteBtn.setAttribute('id',`${list.id}`);

 deleteBtn.addEventListener("click", ()=>{
    myLibrary.forEach((items)=>{
    if(items.id === deleteBtn.id){
      myLibrary.splice(myLibrary[myLibrary.indexOf(items)],1);
     updateBook.textContent += 1;
    }             
   })
   let display = deleteBtn.parentElement.parentElement;
   deleteBtn.parentElement.parentElement.remove();
   console.log(display);
   
})
 return ulBook;
}

function createLists(item){
 let ulBook = createTable();
 let myTitle = document.createElement("li");
 myTitle.textContent = `Title: ${item.title}`;
 let myAuthor = document.createElement("li");
 myAuthor.textContent = `Author: ${item.author}`;
 let myPage = document.createElement("li");
 myPage.textContent = `Page: ${item.pages} pages`;
 let myRead = document.createElement("li");
 if(item.read == true){
 myRead.textContent = "read";
 }else{myRead.textContent = "not read";}
 ulBook.append(myTitle,myAuthor,myPage,myRead);
}

