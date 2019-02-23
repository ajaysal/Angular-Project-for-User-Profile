import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  peopleList: any = [];
  peopleListAll: any = [];

  constructor(private userService: UserService) { }

  ngOnInit() {

    this.userService.getPeopleList().subscribe(data => {
      console.log(data)
      this.peopleList = data.People;
      this.peopleListAll = data.People;

      //select first people as default
      this.selectPeople(this.peopleList[0]);
    });

    this.userService.getFilterTerm().subscribe(term => {

      if (term && term !== '') {
        this.peopleList = this.peopleListAll.filter(p => p.name.toLowerCase().includes(term.toLowerCase()));
      } else {
        this.peopleList = this.peopleListAll;
      }

      //select first people as default
      if (this.peopleList.length)
        this.selectPeople(this.peopleList[0]);
    });

  }

  selectPeople(people) {
    this.userService.selectPeople(people);
    for (const item of this.peopleList) {
      item.selected = false;
    }

    people.selected = true;
  }

}