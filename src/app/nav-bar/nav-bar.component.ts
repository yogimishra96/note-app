import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  loggedIn()  {
    return localStorage.getItem('token');
  }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/user-login']);
  }

}
