import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor() {
    sessionStorage.removeItem('logged_in_user');
    location.assign('/home');
  }

  ngOnInit() {
  }

}
