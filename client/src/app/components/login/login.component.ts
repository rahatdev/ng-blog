import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;

  constructor(private _auth: AuthService) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    //todo
    const user = {
      username: this.username,
      password: this.password
    }

    //authenticate with service
    

  }

}
