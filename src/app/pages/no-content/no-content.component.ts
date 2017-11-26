import { Component } from '@angular/core';

@Component({
  selector: 'no-content-directive',
  template: '404 not found'
})
export class NoContentComponent {
  public title : string = 'no content';
}
