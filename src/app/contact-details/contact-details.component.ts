import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../user.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit, OnDestroy {

  people: any = {};
  subscription: Subscription;
  currentRate = 4;

  constructor(private userService: UserService) { }

  ngOnInit() {
    // subscribe to home component messages
    this.subscription = this.userService.getSelectedPeople().subscribe(people => {
      this.people = people;
    });
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

}