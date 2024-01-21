import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Manuel';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'greet him',
    female: 'greet her'
  }

  changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  // i18nPlural
  public clients: string[] = ['Maria', 'Pedro', 'Manuel', 'Hernando', 'Eduardo', 'Melissa', 'Natalia'];
  public clientsMap = {
    '=0': 'we have no clients waiting.',
    '=1': 'we have one client waiting.',
    '=2': 'we have 2 people waiting.',
    'other': 'we have # clients waiting.',
  }

  deleteClient(): void {
    this.clients.shift();
  }

  // KeyValue Pipe
  public person = {
    name: 'Manuel',
    age: 29,
    address: 'Ottawa, Canada',
  }

  // Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap(value => console.log('tap:', value)),
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('We have data in the promise.');
      console.log('We have data in the promise.');
      this.person.name = 'Another name'
    }, 3500);
  })
}
