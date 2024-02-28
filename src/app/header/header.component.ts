import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  @Input() titulo: string="";

  constructor(private router: Router) {}

  userLogout() {
    console.log("Logout!");
    localStorage.clear();
    this.router.navigate(["login"]);
  }
}
