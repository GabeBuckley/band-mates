import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../../common/services/api.service';
import { IUser, IUserData } from 'src/app/interfaces';
import { AES, enc } from 'crypto-ts';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loggedInUser: IUser = null;

  constructor(@Inject(ApiService) private api: ApiService) {
    const woobie = AES.encrypt('Password123', '27011976').toString();
    console.log(woobie);
  }

  ngOnInit() {
    sessionStorage.removeItem('logged_in_user');
  }



  doLogin() {
    const strUsername = (document.querySelector('#username') as HTMLInputElement).value;
    const strPass = (document.querySelector('#password') as HTMLInputElement).value;

    this.api.users().subscribe(
      (data: any) => {
        for (const user in data) {
          if (data.hasOwnProperty(user)) {
            const objUser: IUser = data[user];

            if ((objUser.username === strUsername) || (objUser.userData && (objUser.userData.email === strUsername))) {
              if (objUser.userData && (objUser.userData.passwordHash)) {
                const hashBytes = AES.decrypt(objUser.userData.passwordHash.toString(), '27011976');
                const decryptedData = hashBytes.toString(enc.Utf8);
                if (decryptedData === strPass) {
                  this.loggedInUser = objUser;
                  sessionStorage.setItem('logged_in_user', JSON.stringify(this.loggedInUser));
                  location.assign('/home');
                } else {
                  sessionStorage.removeItem('logged_in_user');
                }
              }
            }
          }
        }
      }
    );
  }
}
