interface Book {
  title: string;
  author: string;
  isbn: string;
  available: boolean;
}

class Library {
  private books: Book[] = [];

  addBook(book: Book): void {
    this.books.push(book);
    console.log(`${book.title} by ${book.author} has been added to the library.`);
  }

  removeBook(isbn: string): void {
    const index = this.books.findIndex((book) => book.isbn === isbn);
    if (index !== -1) {
      const removedBook = this.books.splice(index, 1)[0];
      console.log(`${removedBook.title} by ${removedBook.author} has been removed from the library.`);
    } else {
      console.log(`Book with ISBN ${isbn} is not found in the library.`);
    }
  }

  checkoutBook(isbn: string): void {
    const book = this.books.find((book) => book.isbn === isbn);
    if (book) {
      if (book.available) {
        book.available = false;
        console.log(`${book.title} has been checked out.`);
      } else {
        console.log(`${book.title} is already checked out.`);
      }
    } else {
      console.log(`Book with ISBN ${isbn} is not found in the library.`);
    }
  }

  returnBook(isbn: string): void {
    const book = this.books.find((book) => book.isbn === isbn);
    if (book) {
      if (!book.available) {
        book.available = true;
        console.log(`${book.title} has been returned.`);
      } else {
        console.log(`${book.title} is already available in the library.`);
      }
    } else {
      console.log(`Book with ISBN ${isbn} is not found in the library.`);
    }
  }

  listBooks(): void {
    if (this.books.length === 0) {
      console.log("The library is empty.");
    } else {
      console.log("Books in the library:");
      this.books.forEach((book) => {
        console.log(`${book.title} by ${book.author} (ISBN: ${book.isbn}) - ${book.available ? 'Available' : 'Checked Out'}`);
      });
    }
  }
}

// Create a sample library and perform operations:

const library = new Library();

library.addBook({ title: "The Hobbit", author: "J.R.R. Tolkien", isbn: "978-0547928227", available: true });
library.addBook({ title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", isbn: "978-0590353427", available: true });
library.addBook({ title: "To Kill a Mockingbird", author: "Harper Lee", isbn: "978-0061120084", available: true });

library.listBooks();

library.checkoutBook("978-0547928227");
library.checkoutBook("978-0061120084");
library.returnBook("978-0547928227");

library.listBooks();
