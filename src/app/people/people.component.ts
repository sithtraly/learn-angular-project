import { Component, OnInit } from '@angular/core';
import { People } from './people';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people = People;
  constructor() { }

  ngOnInit(): void {
  }

}
