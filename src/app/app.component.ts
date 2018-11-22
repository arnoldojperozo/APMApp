import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
  <div><h1>{{pagTitle}}</h1>
    <pm-products></pm-products>
  </div>
  `
})
export class AppComponent {
  // tslint:disable-next-line:no-inferrable-types
  pagTitle: string = 'ACME AJPM Product Management';
}
