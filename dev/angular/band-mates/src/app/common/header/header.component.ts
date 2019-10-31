import { Component, OnInit, Inject } from '@angular/core';
import { MatToolbar } from '@angular/material';
import { IUser } from 'src/app/interfaces';
import { ApiService } from '../../common/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private imageServer = 'http://localhost:3000/userdata/';

  loggedInUser: IUser = null;
  constructor(@Inject(ApiService) private api: ApiService) { }

  ngOnInit() {
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

  public get userAvatarURI() {
    const defaultAvatarImage = '/assets/default_avatar.png';
    if (this.loggedInUser) {
      if (this.loggedInUser.avatar) {
        return this.imageServer.concat(this.loggedInUser.id.toString()).concat('/').concat(this.loggedInUser.avatar);
      }
    }
    return defaultAvatarImage;
  }

}
