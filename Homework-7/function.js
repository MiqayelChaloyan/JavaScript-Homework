// function Book(title, author) {
//     this.title = title;
//     this.author = author;
// }

// Object.defineProperty(Book.prototype, 'toString', {
//     writable: true,
//     configurable: true,
//     enumerable: false,
//     value: function () {
//         return `${this.title} - ${this._author}`;
//     }
// });

// Object.defineProperty(Book.prototype, 'isTheSameBook', {
//     writable: true,
//     configurable: true,
//     enumerable: false,
//     value: function (book) {
//         if (this.title === book) {
//             return true;
//         }

//         return false;
//     }
// });


// const book_1 = new Book("The Adventures of Tom Sawyer", "Mark Twain");
// const book_2 = new Book("The Sound and the Fury ", "William Faulkner");
// const book_3 = new Book("Handmaid's Tale", "Margaret Atwood");


// function LibraryBookBase(title, author, bookId) {
//     Book.call(this, title, author);
//     this.bookId = bookId;
// }

// LibraryBookBase.prototype = Object.create(Book.prototype);
// LibraryBookBase.prototype.constructor = LibraryBookBase;


// const library_base = new LibraryBookBase('Jane Eyre', "Charlotte Brontë", 4);


// function LibraryBook(title, author, bookId, quantity) {
//     Book.call(this, title, author);
//     this.bookId = bookId;
//     this.quantity = quantity;
// }

// LibraryBook.prototype = Object.create(Book.prototype);
// LibraryBook.prototype.constructor = LibraryBook;

// Object.defineProperty(LibraryBook.prototype, 'increaseQuantityBy', {
//     writable: true,
//     configurable: true,
//     enumerable: false,
//     value: function (amount) {
//         this.quantity += amount;
//     }
// });

// Object.defineProperty(LibraryBook.prototype, 'isTheSameBook', {
//     writable: true,
//     configurable: true,
//     enumerable: false,
//     value: function (amount) {
//         if (this.quantity < amount) {
//             return `There are only ${this.quantity} instacne of the book!`;
//         }

//         this.quantity -= amount;
//     }
// });


// const library_book_1 = new LibraryBook("One Morning in Maine", "Robert McCloskey", 1, 3);
// const library_book_2 = new LibraryBook("The little Prince", "Antoine de Saint-Exupery", 2, 1);
// const library_book_3 = new LibraryBook("The Daughter's Tale", "Armando Lucas Correa", 3, 2);


// function ReaderBook(title, author, bookId, expirationDate, isReturned) {
//     Book.call(this, title, author);
//     this.bookId = bookId;
//     this.expirationDate = expirationDate;
//     this.isReturned = isReturned;
// }

// ReaderBook.prototype = Object.create(Book.prototype);
// ReaderBook.prototype.constructor = ReaderBook;

// const readerBook_1 = new ReaderBook("One Morning in Maine", "Robert McCloskey", 1, new Date(), true);
// const readerBook_2 = new ReaderBook("The Daughter's Tale", "Armando Lucas Correa", 2, new Date(), false);


// function Reader(firstName, lastName, readerId, books) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.readerId = readerId;
//     this.books = books;
// }

// Object.defineProperty(Reader.prototype, 'borrowBook', {
//     writable: true,
//     configurable: true,
//     enumerable: false,
//     value: function (book, library) {
//         for (let i = 0; i < library.books.length; i++) {
//             if (library.books[i].title === book.title && library.books[i].author === book.author) {
//                 let readerBook = new ReaderBook(library.books[i].title, library.books[i].author, library.books[i].bookId, new Date(), false)
//                 this.books.push(readerBook);
//             }
//         }
//         return `Sorry, we don't have the book yet.`
//     }
// });

// const reader = new Reader('Anahit', 'Mnacakanyan', 2, [readerBook_1, readerBook_2]);
// console.log(reader)


// function Library(books, readers) {
//     this.books = books;
//     this.readers = readers;
// }

// Object.defineProperty(Library.prototype, 'doHaveBook', {
//     writable: true,
//     configurable: true,
//     enumerable: false,
//     value: function (requestedBook) {
//         for (let i = 0; i < this.books.length; i++) {
//             if (requestedBook.title === this.books[i].title && requestedBook.author === this.books[i].author) {
//                 return true;
//             }
//         }
//         return false;
//     }
// });

// Object.defineProperty(Library.prototype, 'addBook', {
//     writable: true,
//     configurable: true,
//     enumerable: false,
//     value: function (newBook) {
//         for (let i = 0; i < this.books.length; i++) {
//             if (newBook.title === this.books[i].title && newBook.author === this.books[i].author) {
//                 this.books[i].quantity++;
//                 return;
//             }
//         }
//         const newLibraryBook = new LibraryBook(newBook.title, newBook.author, 4, 1)
//         this.books.push(newLibraryBook)
//     }
// });

// Object.defineProperty(Library.prototype, 'addBooks', {
//     writable: true,
//     configurable: true,
//     enumerable: false,
//     value: function (newBooks) {
//         for (let i = 0; i < newBooks.length; i++) {
//             library.addBook(newBooks[i]);
//         }
//     }
// });

// Object.defineProperty(Library.prototype, 'lendBook', {
//     writable: true,
//     configurable: true,
//     enumerable: false,
//     value: function (book, readeId) {
//         for (let i = 0; i < this.books.length; i++) {
//             if (book.title === this.books[i].title && book.author === this.books[i].author && this._books[i].quantity >= 1) {
//                 for (let j = 0; j < this.readers.length; j++) {
//                     if (this.readers[j].readerId === readeId) {
//                         const borrowedBook = new ReaderBook(this.books[i].title, this.books[i].author, this.books[i].bookId, new Date(), false);
//                         return borrowedBook;
//                     }
//                 }
//             }
//         }
//     }
// });


// const library = new Library([library_book_1, library_book_2, library_book_3], [reader])


// reader.borrowBook(book_1, library);
// library.doHaveBook(book_1)
// library.addBook(book_1);
// library.addBooks([book_1, book_2, book_3]);
// library.lendBook(book_1, 2)
