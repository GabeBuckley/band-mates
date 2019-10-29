import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../../common/services/api.service';
import { IUser, IUserData } from 'src/app/interfaces';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.scss']
})
export class UserManagerComponent implements OnInit {

  public mode = 'browse_list';
  public userList: MatTableDataSource<IUserData>;
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

}
