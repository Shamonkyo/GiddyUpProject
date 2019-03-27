import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Subscription} from 'rxjs';
import {AmplifyService} from 'aws-amplify-angular';
import {Router} from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() sidenaveToggle = new EventEmitter<void>();
  isAuth: boolean;
  constructor(  private amplifyService: AmplifyService, private routerIndex: Router ) { }

  ngOnInit() {
    this.amplifyService.authStateChange$.subscribe(authState => {
      if (authState.state === 'signedIn' ) {
        this.isAuth = true;
        } else {
        this.isAuth = false;
      }
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
  onToggleSidenav() {
    this.sidenaveToggle.emit();


  }
}
