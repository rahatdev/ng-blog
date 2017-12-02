import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;

  constructor() { }

  ngOnInit() {
  }

  onLoginSubmit(){
    //todo
    console.log(this.username)
    console.log(this.password)

  }

}
