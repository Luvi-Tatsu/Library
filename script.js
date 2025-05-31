const deleteBtn = document.querySelectorAll("button.delete");
const save = document.querySelector("button.save");
const updateBook = document.querySelector("button#updateBook");
const dialog = document.querySelector("dialog.addBook")


deleteBtn.forEach((deleteBtn)=>{
    deleteBtn.addEventListener("click", ()=>{
    let display = deleteBtn.parentElement.parentElement;
    console.log(display);
    deleteBtn.parentElement.parentElement.remove();
})
})

updateBook.addEventListener('click', ()=>{
    dialog.showModal();
    console.log("clicked")
    console.log(dialog.showModal())
})


function Book(title, author,pages,read){
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
      }

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function (){
     return`${this.title} by ${this.author}, ${this.pages}, ${this.read}.`;
    };
}


const theHobbit = new Book("The Hobbit","J.R.R Tolkien","295 pages","not read yet");
console.log(theHobbit.info())