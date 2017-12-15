import { Component, OnInit } from '@angular/core';
import { Country } from '../view-models/country';
import { AppDataService } from '../services/app-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-maint',
  templateUrl: './country-maint.component.html',
  styleUrls: ['./country-maint.component.css']
})
export class CountryMaintComponent implements OnInit {

  countries : Array<Country>;
  deleteError: string;
  deletedId: number;
  isDeleting: boolean = false;

  constructor(private dataService: AppDataService,
              private router: Router) {
    dataService.getCountries().subscribe((data)=>this.countries = data);
  }

  cancelDelete() {
    this.isDeleting = false;
    this.deletedId = null;
  }

  deleteCountry(id: number){
    this.isDeleting = true;
    this.dataService.deleteCountry(id).subscribe(
      c => this.cancelDelete(),
      err => {this.deleteError = err; this.isDeleting=false;}
    );
  }

  deleteCountryQuestion(id:number){
    this.deleteError = null;
    this.deletedId = id;
  }

  editCountry(id: number){
    this.router.navigate(['/authenticated/country-detail',id,'edit']);
  }

  createCountry(){
    this.router.navigate(['/authenticated/country-detail',0,'create']);
  }

  showCountryDetail(id: number) {
    this.router.navigate(['/authenticated/country-detail',id,'details']);
  }

  ngOnInit() {
  }

}
