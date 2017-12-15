import { Component, OnInit } from '@angular/core';
import { Country } from '../view-models/country';
import { AppDataService } from '../services/app-data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  allCountries: Array<Country>;
  count: number;
  countries: Array<Country>;

  constructor(private dataService : AppDataService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {    
    this.dataService.getCountries().subscribe(
      c => {
        this.allCountries = c;

        this.count = this.route.snapshot.params['count'];
        this.updateList();
      }
    );

    this.route.params.subscribe(
      params => {
        this.count = params['count'];
        this.updateList();
      });
  }

  updateList(){
    this.countries = this.count > 0 ? this.allCountries.slice(0,this.count)
                                    : this.allCountries;
  }

}
