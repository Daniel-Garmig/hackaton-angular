import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { PeopleService } from '../people.service';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgbAlertModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  errorMsg: string = "";

  formLogin = new FormGroup(
    {
      user: new FormControl(''),
      pass: new FormControl(''),
    });

  constructor(private peopleService: PeopleService, private router: Router) {}

  submitLogin() {
    /*if (this.formLogin.valid) {
      this.errorMsg = "Campos inválidos";
      return;
    }*/
    let email = this.formLogin.value.user;
    let pass = this.formLogin.value.pass;

    if (!email || !pass) {
      this.errorMsg = "Campos vacíos";
      return;
    }

    let req = this.peopleService.userLogin(email, pass);
    req.subscribe((res: any) => {
      let token = res.token;
      localStorage.setItem("token", token);
      this.router.navigate(["dashboard"]);
    }, (error: HttpErrorResponse) => {
      console.log(error);
      this.errorMsg = "Los datos introducidos no son válidos.";
    });
  };
}
