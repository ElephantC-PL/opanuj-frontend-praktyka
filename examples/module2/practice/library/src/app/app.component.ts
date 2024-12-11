import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

interface Book {
  id: number,
  name: string
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'library';
  books: Book[] = [{id: 1, name: "aaaa"}, {id: 2, name: "bbbbb"}];
  newTitle = "";

  addBook = ():void => {
    if(!this.newTitle) return;
    const newId = this.books.reduce((max, book) => Math.max(max, book.id), 0) + 1;
    this.books.push({id: newId, name: this.newTitle})
    this.newTitle = '';
  }

  deleteBook = (id: number) => {
    this.books = this.books.filter(x => x.id !== id);
  }
}
