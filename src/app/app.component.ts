import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives';
  show = false;
  show1 = 'yes'
  user='firoz'
  color = ""
  data = ['Firoz', 'Sultan', 'Akhlaque', 'Dude']
  data1 = [
    {
      name: 'Firoz khan',
      age: 23,
      work:'MEAN Developer'
    },
    {
      name: 'Firoz khan2',
      age: 23,
      work:'MEAN Developer'
    },
    {
      name: 'Akhlaque',
      age: 23,
      work:'MEAN Developer'
    },
    {
      name: 'Asfaque',
      age: 23,
      work:'Data Scientist'
    }
  ]
  changeColor(){
    this.color='color'
  }
}
