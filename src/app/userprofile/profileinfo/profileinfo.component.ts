import { Component, OnInit } from '@angular/core';
import {User} from '../../user';
import {Auth} from 'aws-amplify';
import {AmplifyService} from 'aws-amplify-angular';
import {APIService} from '../../API.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-profileinfo',
  templateUrl: './profileinfo.component.html',
  styleUrls: ['./profileinfo.component.css']
})
export class ProfileinfoComponent implements OnInit {
  userId: string;
  userName: string;
  user = new User('', '', '', '', '', '', '' );
  showPhoto: boolean;
  userCreated: boolean;
  constructor(private api: APIService, private amplifyService: AmplifyService, private routerIndex: Router) {

    this.amplifyService
      .auth()
      .currentAuthenticatedUser()
      .then(user => {
        this.userName = user.username;
      });
  }

  ngOnInit() {
    Auth.currentAuthenticatedUser({
      bypassCache: false
    }).then(async user => {
      this.userId = user.attributes.sub;
      this.userName = user.username;
      const result = await this.api.GetUser(this.userId);
      if (!result) {
        this.userCreated = false;
        this.user = new User('', '', '', '', '' , '', '');
      } else {
        this.userCreated = true;
        this.showPhoto = !!result.image;
        this.user = new User(
          this.userId,
          result.username,
          result.firstName,
          result.lastName,
          result.phoneNumber,
          result.address,
          result.image
        );
      }

    })
      .catch(err => console.log(err));
  }
  editPhoto() {
    this.showPhoto = false;
  }
  async onImageUploaded(e) {
    this.user.imageUrl = e.key;
    if (this.userCreated) {
      await this.api.UpdateUser({
        id: this.userId,
        image: this.user.imageUrl
      });
    }
    this.showPhoto = true;
  }
  getType(): string {
    return this.userCreated ? 'UpdateUser' : 'CreateUser';
  }

  async updateProfile() {
    const user = {
      id: this.userId,
      username: this.userName,
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      phoneNumber: this.user.phoneNumber,
      address: this.user.address,
    };
    await this.api[this.getType()](user);
  }
}
