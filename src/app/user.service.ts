import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';


@Injectable()
export class UserService {

  private peopleSubject = new Subject<any>();
  private filterPeoplesSubject = new Subject<any>();


  constructor(private http: HttpClient) {
  }

  public getPeopleList(): Observable<any> {
    return this.http.get("./assets/people.json")
  }

  selectPeople(people: any) {
    this.peopleSubject.next(people);
  }

  clearSelectedPeople() {
    this.peopleSubject.next();
  }

  getSelectedPeople(): Observable<any> {
    return this.peopleSubject.asObservable();
  }


  filterPeople(term: any) {
    this.filterPeoplesSubject.next(term);
  }


  getFilterTerm(): Observable<any> {
    return this.filterPeoplesSubject.asObservable();
  }

}