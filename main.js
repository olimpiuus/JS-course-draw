let myLibrary = []
const newBookForm = {
    inputs: {
        title: document.querySelector('#title'),
        author: document.querySelector('#author'),
        pages: document.querySelector('#pages'),
        read: document.querySelector('#read-yet')
    },
    button: document.querySelector('#bookAddBtn')
}

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = () => (title + ' by ' + author + ', ' + pages + 'pages, ' + (this.read ? 'already read' : 'not read yet'))
}

function addBookToLibrary() {
    newBookForm.button.addEventListener('click', (e) => {
        e.preventDefault()
        let newBookArg = []
        Object.values(newBookForm.inputs).forEach((el) => {
            newBookArg.push(el.value)
        })
        myLibrary.push(new Book(newBookArg.join(', ')))
        console.log(myLibrary);



    })
}
addBookToLibrary()