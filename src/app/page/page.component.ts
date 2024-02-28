import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { User } from '../user';
import { PeopleService } from '../people.service';
import { UserComponent } from '../user/user.component';
import { NgbPaginationModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-page',
  standalone: true,
  imports: [HeaderComponent, UserComponent, NgbPaginationModule],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css'
})
export class PageComponent implements OnInit {
  title: string = "Prueba Técnica"
  userList: Array<User> = [];
  currentPage: number = 1;
  totalElements = 0;

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.loadFromApi();
  }

  btAddNew_Click() {

  }

  onPageChanged() {
    console.log("Page changed: " + this.currentPage.toString());
    this.loadFromApi();
  }


  private loadFromApi() {
    let req = this.peopleService.getUserList(this.currentPage);
    req.subscribe((e: any) => {
      this.userList = [];
      for(let u of e.data as Array<User>) {
        this.userList.push(u);
      }
      this.currentPage = e.page;
      this.totalElements = e.total;
    });
  }
}

