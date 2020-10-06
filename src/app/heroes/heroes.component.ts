import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Heroes } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Lee Sin'
  };

  heroes = Heroes;

  selectedHero: Hero;
  onClick(hero: Hero): void { // onClick is a function name
    this.selectedHero = hero;
  }

  clear(): void {
    this.selectedHero = null;
  }

  constructor() { }

  ngOnInit() {
  }

}