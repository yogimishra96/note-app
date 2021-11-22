import { Component, OnInit } from '@angular/core';
import * as alertify from 'alertifyjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
	selector: 'app-user-register',
	templateUrl: './user-register.component.html',
	styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

	constructor(private router: Router) { }

	ngOnInit(): void {

	}


	// saving data in localstorage, we can configure it for multiple users.

	registerUser(userlogin: NgForm) {

		// let registerData = [];
		// registerData.push(userlogin);
		// let usersData =  localStorage.getItem('Users');
		// if(usersData) {
		// 	usersData = JSON.parse(usersData);
		// 	usersData.concat(registerData);
		// }

		localStorage.setItem('Users', JSON.stringify(userlogin));
		alertify.success('User added');
		this.router.navigate(['/user-login']);
	}


}
