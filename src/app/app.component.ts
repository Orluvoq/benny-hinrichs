import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1><h2>{{book}} deatails:`,
})
export class AppComponent  {
  title = "Benny's Books";
  book = "New Plague";
 }
