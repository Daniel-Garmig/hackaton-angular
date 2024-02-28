import { Component, Input } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() userData: User = {
    id: -1,
    email: "",
    first_name: "",
    last_name: "",
    avatar: ""
  };

  constructor(private router: Router) {}

  btShowDetails() {
    this.router.navigate(['user', this.userData.id]);
  }
  
}
