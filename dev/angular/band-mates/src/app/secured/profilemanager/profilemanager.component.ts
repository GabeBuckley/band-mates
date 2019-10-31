import { Component, OnInit, Inject } from '@angular/core';
import { IUser } from 'src/app/interfaces';
import { ApiService } from '../../common/services/api.service';

@Component({
  selector: 'app-profilemanager',
  templateUrl: './profilemanager.component.html',
  styleUrls: ['./profilemanager.component.scss']
})
export class ProfilemanagerComponent implements OnInit {

  loggedInUser: IUser = null;

  private imageServer = 'http://localhost:3000/userdata/';

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
