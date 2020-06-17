import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BeerService} from '../../services/beer.service';
import {BeerModel} from '../../models/beer.model';

@Component({
  selector: 'app-beer-overview',
  templateUrl: './beer-overview.component.html',
  styleUrls: ['./beer-overview.component.css']
})
export class BeerOverviewComponent implements OnInit {
  sub: any;
  currentId;
  currentBeer: BeerModel = new BeerModel();

  constructor(public route: ActivatedRoute,
              private beerService: BeerService
  ) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.currentId = params.id;
    });

    this.beerService.getBeerWithId(this.currentId).subscribe(beer => {
      this.currentBeer = beer[0];
    });
  }
}
