import { Component, OnInit } from '@angular/core';
import { People } from '../people/people';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent implements OnInit {
  people = People;
  constructor() { }

  ngOnInit(): void {
  }

}
