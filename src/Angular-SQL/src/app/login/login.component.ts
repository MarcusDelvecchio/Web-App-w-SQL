import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loggedIn: boolean = false;
  username;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.checkLoggedIn();
  }

  checkLoggedIn() {
    let value = localStorage.getItem('loggedIn');
    if (value === 'true') {
      this.loggedIn = true;
      this.username = localStorage.getItem('username');
    }
    else {
      this.loggedIn = false;
    }
  }

  login() {
    let username: string = (document.getElementById("username") as HTMLInputElement).value;
    let password: string = (document.getElementById("password") as HTMLInputElement).value;

    // #### TEMP ####
    if (username !== "admin" || password !== "pokes123") return;
    // #### TEMP ####
    
    localStorage.setItem('loggedIn','true');
    localStorage.setItem('username', username);

    this.checkLoggedIn();
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 500);
  }

  logout() {
    
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('username');

    this.checkLoggedIn();
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 1000);
  }
}
