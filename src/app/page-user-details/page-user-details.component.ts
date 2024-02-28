import { Component, Input } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PeopleService } from '../people.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-page-user-details',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './page-user-details.component.html',
  styleUrl: './page-user-details.component.css'
})
export class PageUserDetailsComponent {
  title: string = "Prueba Técnica"
  userData: User = {
    id: -1,
    email: "example@asdas",
    first_name: "Nestor",
    last_name: "De frutos",
    avatar: "https://reqres.in/img/faces/10-image.jpg"
  };


  constructor(private activatedRoute: ActivatedRoute, private peopleService: PeopleService, private router: Router) {
    this.activatedRoute.paramMap.subscribe((parametros: ParamMap) => {
      let userId = parseInt(parametros.get("id")!);
      let req = peopleService.getUserData(userId);
      req.subscribe((res: any) => {
        this.userData = res.data as User;
      });
    })
  }

  btBack_Click() {
    this.router.navigate(["dashboard"]);
  }
}
