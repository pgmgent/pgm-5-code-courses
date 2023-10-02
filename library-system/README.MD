**Title: TypeScript Library Management**

**Objective:** Create a TypeScript application to manage a library of books. Implement the following features:

1. Create a `Book` interface with properties: `title`, `author`, `isbn`, and `available`.

2. Create a class `Library` that maintains an array of books and has the following methods:
   - `addBook(book: Book): void`: Adds a book to the library.
   - `removeBook(isbn: string): void`: Removes a book from the library based on its ISBN.
   - `checkoutBook(isbn: string): void`: Marks a book as checked out.
   - `returnBook(isbn: string): void`: Marks a checked-out book as returned.
   - `listBooks(): void`: Lists all books in the library with their availability status.

3. Create a sample library instance and perform the following operations:
   - Add several books to the library.
   - List all books in the library.
   - Check out and return some books.
   - List all books again to verify availability.

**Hints:**
- You may want to use TypeScript features like interfaces, classes, and type annotations.
- Implement input validation to ensure proper handling of various scenarios.

Feel free to add more complexity or additional features to this exercise if you'd like a longer challenge.