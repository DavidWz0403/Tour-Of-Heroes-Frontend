import { Component, OnInit } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { ApiService } from '../api.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = []
  
  constructor(
    private apiService: ApiService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getHeroes(); 
  }

  getHeroes() {
    this.apiService.getHeroes().subscribe(
      (data) => {
        console.log(data)
        {this.heroes = data}; 
        
      }, (err) => console.log(err)
    )
  }

  navigateToRoute(){
    this.router.navigate(['/create'])
  }

}
