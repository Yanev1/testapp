import { Component } from '@angular/core';
declare const MyTest: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testapp';

  onClick(){
    MyTest();
  }
}
