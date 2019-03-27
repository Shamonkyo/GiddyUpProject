import { Component, OnInit } from '@angular/core';
import {AmplifyService} from 'aws-amplify-angular';
import {Router} from '@angular/router';
import {Auth} from 'aws-amplify';
import {User} from '../user';
import {APIService} from '../API.service';

@Component({
  selector: 'app-userdash',
  templateUrl: './userdash.component.html',
  styleUrls: ['./userdash.component.css']
})
export class UserdashComponent implements OnInit {
  userId: string;
  userName: string;
  user = new User('', '', '', '', '', '', '');

  username: string;

  constructor(private api: APIService, private amplifyService: AmplifyService, private routerIndex: Router) {
    this.amplifyService
      .auth()
      .currentAuthenticatedUser()
      . then(user => { this.username = user.username;
      });
  }
  logOut() { this.amplifyService
    .auth()
    .signOut()
    . then(() => {this.routerIndex.navigateByUrl('');
    })
    .catch( err => {return false;
    });
  }

  ngOnInit() {
    Auth.currentAuthenticatedUser({
      bypassCache: false
    }).then(async user => {
      this.userId = user.attributes.sub;
      this.userName = user.username;
    })
      .catch(err => console.log(err));
  }

  async updateProfile() {
    const user = {
      id: this.userId,
      username: this.username,
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      phoneNumber: this.user.phoneNumber,
      address: this.user.address
    };
    await this.api.CreateUser(user);
  }
}
