import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchControl: FormControl = new FormControl();

  constructor(private userService: UserService) { }

  ngOnInit() {

    this.searchControl.valueChanges
      .subscribe((term: any) => {
        console.log('term', term);
        this.userService.filterPeople(term);
      })

  }

  clearSearch(){
    this.searchControl.patchValue(null);
  }

}