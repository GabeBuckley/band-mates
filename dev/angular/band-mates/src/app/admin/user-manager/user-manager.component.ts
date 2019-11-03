import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../../common/services/api.service';
import { IUser } from 'src/app/interfaces';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.scss']
})
export class UserManagerComponent implements OnInit {

  public mode = 'browse_list';
  public userList: MatTableDataSource<IUser>;
  displayedColumns: string[] = ['id', 'username', 'email'];

  constructor(@Inject(ApiService) private api: ApiService) { }

  ngOnInit() {
    this.api.users().subscribe(
      (data: any) => {
        this.userList = new MatTableDataSource(data);
        console.log(this);
      }
    );

  }

  newUser() {
    this.mode = 'new_user';
  }

  saveNewUser() {
    const strUsername = (document.querySelector('#username') as HTMLInputElement).value;
    const strEmail = (document.querySelector('#email') as HTMLInputElement).value;
    const strName = (document.querySelector('#name') as HTMLInputElement).value;

    const newUser: IUser = {
      email: strEmail,
      passwordHash: ''
    };

    if (this.isValidUser(newUser)) {
      this.api.saveUser(newUser).subscribe(
        (data: any) => {
          console.log(data);
        }
      );
    }
  }

  isValidUser(objUser: IUser) {
    if (objUser) {
      return true;
    }

    return false;
  }

  cancelBackToHome() {
    this.mode = 'browse_list';
  }

}
