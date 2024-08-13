import { Library } from "./desafio"

const myLibrary = new Library();

const newBook = myLibrary.addBook({ title: 'Qualquer livro', description: 'Descreva qualquer livro', author: 'Guiba' });
console.log('Livro adicionado:', newBook);

const allBooks = myLibrary.getBooks();
console.log('Todos os livros:', allBooks);

const bookById = myLibrary.getBookById(newBook.id);
console.log('Livro encontrado:', bookById);

myLibrary.updateBookById(newBook.id, { title: 'The Greatest Gatsby' });
console.log('Livro atualizado:', myLibrary.getBookById(newBook.id));

myLibrary.removeBookById(newBook.id);
console.log('Livro deletado:', myLibrary.getBooks());