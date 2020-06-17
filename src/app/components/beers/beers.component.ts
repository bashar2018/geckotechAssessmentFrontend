import { Component, OnInit } from '@angular/core';
import {BeerModel} from '../../models/beer.model';
import {BeerService} from '../../services/beer.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css']
})
export class BeersComponent implements OnInit {
  public beers: BeerModel[] = [];

  constructor(
    public beerService: BeerService,
  ) {}

  ngOnInit(): void {
    this.beerService.getAllBeers().subscribe(beers => {
      this.beers = beers;
    });
  }
}
