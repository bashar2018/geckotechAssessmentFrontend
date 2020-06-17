import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BeerModel} from "../models/beer.model";

@Injectable({
  providedIn: 'root'
})
export class BeerService {
  private apiURL = 'https://api.punkapi.com/v2/beers/';

  constructor(private httpClient: HttpClient) {
  }

  public getAllBeers(): Observable<BeerModel[]> {
    return this.httpClient.get<BeerModel[]>(this.apiURL);
  }

  public getBeerWithId(id): Observable<any> {
    return this.httpClient.get(this.apiURL + id);
  }
}
