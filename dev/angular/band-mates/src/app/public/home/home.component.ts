import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../../common/services/api.service';
import { HeaderComponent } from '../../common/header/header.component';
import { IUser } from 'src/app/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loggedInUser: IUser = null;

  constructor(@Inject(ApiService) private api: ApiService) {
    const sessionUserData = sessionStorage.getItem('logged_in_user');
    if (sessionUserData) {
      const sessionUser = JSON.parse(sessionUserData);
      this.api.user(sessionUser.id).subscribe(
        (data: any) => {
          this.loggedInUser = data;
          console.log(this.loggedInUser);
        }
      );
    }
  }

  ngOnInit() {
  }

}
