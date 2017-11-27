import { Component } from '@angular/core';

@Component({
  selector: 'contacto-directive',
  templateUrl: './contacto.component.html'
})
export class ContactoComponent {
  public title : string = 'contqcto';
  public counter: number = 0;

  addNumber(){
    this.counter++;
  }
}
