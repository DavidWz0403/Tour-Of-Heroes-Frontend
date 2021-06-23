import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService } from '../api.service';
import { Hero } from '../interfaces/hero';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero | undefined;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero(); 
  }

  getHero():void {
    const id = String(this.route.snapshot.paramMap.get('id'))
    this.apiService.getHero(id).subscribe(hero => this.hero = hero); 
  }

  deleteHero(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.apiService.deleteHero(id).subscribe(); 
    this.location.back(); 
  }

  updateHero() {
    const id = String(this.route.snapshot.paramMap.get('id'));
    if(this.hero != undefined){
      this.apiService.updateHero(id, this.hero ).subscribe(() => this.goBack()); 
    }
    
  }

  goBack(): void {
    this.location.back(); 
  }
 
}
