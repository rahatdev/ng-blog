import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;

  constructor(
    private _auth: AuthService,
    private _flashMessage: FlashMessagesService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    //todo
    const user = {
      username: this.username,
      password: this.password
    }

    //authenticate with service
    this._auth.authenticateUser(user).subscribe(data => {
      if (data.success) {
        this._flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
        this._auth.storeUserData(data.token, data.user)
        //refresh pages to show private posts as well as create/edit
        this._router.navigate(['/home']);
      } else {
        this._flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
      }
    })

  }

  onLogoutClick() {
    this._auth.logout();
    this._router.navigate(['/home']);
  }

}
