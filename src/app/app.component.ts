import { Component } from '@angular/core';
import wordsArray from '../utils/words';
import countrysArray from '../utils/countrys';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-generator';

  words = '';
  limit = 10;
  countryName = '';

  handleSlideChange(newLimit: number){
    this.limit = newLimit;
  }

  generate(){
    this.words = wordsArray.slice(0, this.limit).join(" ");
  }

  handleRandomCountryName(){
    this.countryName = countrysArray.slice(0, Math.random()*21).join(" ");
    //this.countryName = countrysArray[Math.random()*21];
  }

}
