import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>hey {{name}}</h1>`,
})
export class AppComponent  { name = 'Geb'; }
