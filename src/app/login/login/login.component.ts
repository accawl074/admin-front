import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import {
  Router
} from '@angular/router';
declare var $;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  private isLoginPage;
  constructor( private router: Router) {}

  ngOnInit() {
    document.body.className = 'hold-transition login-page';
    this.isLoginPage = true;
    $(() => {
      $('input').isCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%' /* optional */
      });
    });
  }

  ngOnDestroy(): void {
    this.isLoginPage = false;
    document.body.className = '';
  }

  login() {
    this.router.navigate(['Inventory']);
  }
}
