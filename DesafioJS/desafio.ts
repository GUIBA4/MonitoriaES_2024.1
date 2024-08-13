class Book {
    id: string;
    title: string;
    description: string;
    author: string;
  
    constructor(title: string, description: string, author: string) {
      this.id = this.generateId();
      this.title = title;
      this.description = description;
      this.author = author;
    }
  
    private generateId(): string {
      return Math.random().toString(36).substring(2, 15);
    }
}
  
export class Library {
    private books: Book[] = [];
  
    addBook(bookInfo: Omit<Book, 'id'>): Book {
      const newBook = new Book(bookInfo.title, bookInfo.description, bookInfo.author);
      this.books.push(newBook);
      return newBook;
    }
  
    getBooks(): Book[] {
      return this.books;
    }
  
    getBookById(id: string): Book | undefined {
      return this.books.find(book => book.id === id);
    }
  
    removeBookById(id: string): void {
      this.books = this.books.filter(book => book.id !== id);
    }
  
    updateBookById(id: string, info: { title?: string, description?: string, author?: string }): Book {
      const book = this.getBookById(id);
      
      if (book) {
        if (info.title !== undefined) book.title = info.title;
        if (info.description !== undefined) book.description = info.description;
        if (info.author !== undefined) book.author = info.author;
      }
      
      return book;
    }
}
  

  