let myLibrary = [{ title: "Omen", author: "Vasya", pages: 323, read: false }, { title: "Omen1", author: "Vasya", pages: 323, read: false }, { title: "Omen2", author: "Vasya", pages: 323, read: false }, { title: "Omen3", author: "Vasya", pages: 323, read: false }]

const bookContainer = document.querySelector('#bookContainer')

const newBookForm = {
    inputs: {
        title: document.querySelector('#title'),
        author: document.querySelector('#author'),
        pages: document.querySelector('#pages'),
        read: document.querySelector('#read-yet')
    },
    button: document.querySelector('#bookAddBtn')
}

function Book([title, author, pages, read]) {
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
        myLibrary.push(new Book(newBookArg))
        fillHtlmlFromLibrary()
    })
}

function fillHtlmlFromLibrary() {


    function createBookCard(array) {
        let bookCard = document.createElement('li')
        bookCard.innerHTML = `<div class="book-card">
        <h3 class="book-card__title">${array.title}</h3>
        <ul class="book-card__info-list">
            <li class="book-card__info-item">Author: <span class="book-card__author">${array.author}</span></li>
            <li class="book-card__info-item">Number of pages: <span class="book-card__pages">${array.pages}</span></li>
            <li class="book-card__info-item">
                <div class="book-card__status_read">
                    <div class="book-card__text book-card__text_question">Read?</div>
                    <div class="book-card__text book-card__text_no">No</div>
                    <label class="switch">
                        <input type="checkbox">
                        <span class="slider round"></span>
                    </label>
                    <div class="book-card__text book-card__text_yes">Yes</div>
                </div>
            </li>
        </ul>
        </div>`
        return bookCard
    }
    bookContainer.innerHTML = ''
    myLibrary.forEach((el) => {
        bookContainer.append(createBookCard(el))
    })





}


addBookToLibrary()
fillHtlmlFromLibrary()