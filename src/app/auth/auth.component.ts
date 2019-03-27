import { Component, OnInit } from '@angular/core';
import {AmplifyService} from 'aws-amplify-angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
isAuth = false;
  constructor(
    private amplifyService: AmplifyService,
    private routerIndex: Router
  ) {
    this.amplifyService = amplifyService;
    this.amplifyService.authStateChange$.subscribe(authState => {
      if (authState.state === 'signedIn' ) {
        this.routerIndex.navigateByUrl('/profile');
        this.isAuth = true;
      }


    });
  }
  ngOnInit() {
  }

}

