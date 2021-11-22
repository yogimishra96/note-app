import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import * as alertify from 'alertifyjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-user-login',
	templateUrl: './user-login.component.html',
	styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

	constructor(private authService: AuthService,
		private router: Router) { }

	ngOnInit(): void {
	}


	// check the given username and password using auth service
	onClickSubmit(userlogin: NgForm) {
		const token = this.authService.authUser(userlogin);
		if (token) {
			localStorage.setItem('token', token.userName);
			alertify.success('Login Successful');
			this.router.navigate(['/dashboard']);
		} else {
			alertify.error('User id or password is wrong');
		}
	}
}