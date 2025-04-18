function createBook(title, author, ISBN) {
    return {
        title,
        author,
        ISBN,
        isBorrowed: false,

        borrow() {
            this.isBorrowed = true;
        },

        returnBook() {
            this.isBorrowed = false;
        }
    };
}


function createLibrary() {
    return {
        books: [],

        addBook(book) {
            this.books.push(book);
        },

        findBookByISBN(isbn) {
            return this.books.find(book => book.ISBN === isbn);
        },

        listAvailableBooks() {
            return this.books.filter(book => !book.isBorrowed);
        },

        listBorrowedBooks() {
            return this.books.filter(book => book.isBorrowed);
        }
    };
}

const library = createLibrary();

const book1 = createBook("1984", "George Orwell", "123456");
const book2 = createBook("The Art", "Harry Potter", "789012");

library.addBook(book1);
library.addBook(book2);

book1.borrow();

console.log("Available books:", library.listAvailableBooks());  // Only book2
console.log("Borrowed books:", library.listBorrowedBooks());    // Only book1

const foundBook = library.findBookByISBN("123456");
console.log("Found book:", foundBook.title);  // "1984"

book1.returnBook();
console.log("Available books after return:", library.listAvailableBooks());
