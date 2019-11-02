import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from './common/services/api.service';
import { IUser } from 'src/app/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'band-mates';

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
