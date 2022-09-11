
// class Book {
//     constructor(title, author) {
//         this._title = title;
//         this._author = author;
//     }

//     get title() {
//         return this._title;
//     }

//     get author() {
//         return this._author;
//     }

//     toString() {
//         return `${this.title} - ${this.author}`;
//     }

//     isTheSameBook(book) {
//         if (this.title === book) {
//             return true;
//         }

//         return false;
//     }
// }

// const book_1 = new Book("The Adventures of Tom Sawyer", "Mark Twain");
// const book_2 = new Book("The Sound and the Fury ", "William Faulkner");
// const book_3 = new Book("Handmaid's Tale", "Margaret Atwood");
// book_1.isTheSameBook("The Adventures of Tom Sawyer");


// class LibraryBookBase extends Book {
//     constructor(title, author, bookId) {
//         super(title, author);
//         this._bookId = bookId;
//     }

//     get bookId() {
//         return this._bookId;
//     }

//     toString() {
//         return super.toString();
//     }
// }

// const library_base = new LibraryBookBase('Jane Eyre', "Charlotte Brontë", 4);


// class LibraryBook extends Book {
//     constructor(title, author, bookId, quantity) {
//         super(title, author);
//         this.bookId = bookId;
//         this.quantity = quantity;
//     }

//     get bookId() {
//         return this._bookId;
//     }

//     set bookId(value) {
//         this._bookId = value;
//     }

//     get quantity() {
//         return this._quantity;
//     }

//     set quantity(value) {
//         this._quantity = value;
//     }

//     toString() {
//         return super.toString();
//     }

//     increaseQuantityBy(amount) {
//         this._quantity += amount;
//     }


//     decreaseQuantityBy(amount) {
//         if (this._quantity < amount) {
//             return `There are only ${this.quantity} instacne of the book!`;
//         }

//         this._quantity -= amount;
//     }
// }

// const library_book_1 = new LibraryBook("One Morning in Maine", "Robert McCloskey", 1, 3);
// const library_book_2 = new LibraryBook("The little Prince", "Antoine de Saint-Exupery", 2, 1);
// const library_book_3 = new LibraryBook("The Daughter's Tale", "Armando Lucas Correa", 3, 2);

// library_book_1.decreaseQuantityBy(2);


// class ReaderBook extends Book {
//     constructor(title, author, bookId, expirationDate, isReturned) {
//         super(title, author);
//         this.bookId = bookId;
//         this.expirationDate = expirationDate;
//         this.isReturned = isReturned;
//     }

//     get bookId() {
//         return this._bookId;
//     }

//     set bookId(value) {
//         this._bookId = value;
//     }

//     get expirationDate() {
//         return this._expirationDate;
//     }

//     set expirationDate(value) {
//         this._expirationDate = value;
//     }

//     get isReturned() {
//         return this._isReturned;
//     }

//     set isReturned(value) {
//         this._isReturned = value;
//     }

//     toString() {
//         return super.toString();
//     }
// }

// const readerBook_1 = new ReaderBook("One Morning in Maine", "Robert McCloskey", 1, new Date(), true);
// const readerBook_2 = new ReaderBook("The Daughter's Tale", "Armando Lucas Correa", 2, new Date(), false);


// class Reader {
//     constructor(firstName, lastName, readerId, books) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.readerId = readerId;
//         this.books = books;
//     }

//     get firstName() {
//         return this._firstName;
//     }

//     set firstName(value) {
//         this._firstName = value;
//     }

//     get lasttName() {
//         return this._lastName;
//     }

//     set lasttName(value) {
//         this._lasttName = value;
//     }

//     get readerId() {
//         return this._readerId
//     }

//     set readerId(value) {
//         this._readerId = value;
//     }

//     get books() {
//         return this._books
//     }

//     set books(value) {
//         this._books = value;
//     }

//     toString() {
//         return super.toString()
//     }

//     borrowBook(book, library) {
//         for (let i = 0; i < library.books.length; i++) {
//             if (library.books[i].title === book.title && library.books[i].author === book.author) {
//                 let readerBook = new ReaderBook(library.books[i].title, library.books[i].author, library.books[i].bookId, new Date(), false)
//                 this.books.push(readerBook);
//             }
//         }
//         return `Sorry, we don't have the book yet.`
//     }
// }

// const reader = new Reader('Anahit', 'Mnacakanyan', 2, [readerBook_1, readerBook_2]);


// class Library {
//     constructor(books, readers) {
//         this._books = books;
//         this._readers = readers;
//     }

//     get books() {
//         return this._books;
//     }

//     get readers() {
//         return this._readers;
//     }

//     doHaveBook(requestedBook) {
//         for (let i = 0; i < this.books.length; i++) {
//             if (requestedBook.title === this.books[i].title && requestedBook.author === this.books[i].author) {
//                 return true;
//             }
//         }
//         return false;
//     }

//     addBook(newBook) {
//         for (let i = 0; i < this.books.length; i++) {
//             if (newBook.title === this.books[i].title && newBook.author === this.books[i].author) {
//                 this.books[i].quantity++;
//                 return;
//             }
//         }
//         const newLibraryBook = new LibraryBook(newBook.title, newBook.author, 4, 1)
//         this.books.push(newLibraryBook);
//         return true;
//     }

//     addBooks(newBooks) {
//         for (let i = 0; i < newBooks.length; i++) {
//             library.addBook(newBooks[i]);
//         }
//     }

//     lendBook(book, readeId) {
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
// }

// const library = new Library([library_book_1, library_book_2, library_book_3], [reader])


// reader.borrowBook(book_1, library);
// library.doHaveBook(book_1);
// library.addBook(book_1);
// library.addBooks([book_1, book_2, book_3]);
// library.lendBook(book_1, 2);

