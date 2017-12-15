import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css', '../../app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {

  constructor(
    private _auth: AuthService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  onNewPostClick(){
    this._router.navigate(['/edit']);
  }

}
