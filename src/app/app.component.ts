import { SelectorMatcher } from '@angular/compiler';
import { Component } from '@angular/core';
import { Satellite } from './satellite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'orbit-report';

  sourceList: Satellite[];
  displayList: Satellite[];

  constructor() {
    this.sourceList = [];
    let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';

    window.fetch(satellitesUrl).then(function (response) {
      response.json().then(function (data) {

        let fetchedSatellites = data.satellites;

        this.sourceList = fetchedSatellites.map(obj => {

          let satObj = new Satellite(
            obj.name,
            obj.type,
            obj.launchDate,
            obj.orbitType,
            obj.operational
          );

          return satObj;
        });
        this.displayList = this.sourceList.slice(0);
      }.bind(this));
    }.bind(this));
  }

  search(searchTerm: string, nameCheckbox: boolean, typeCheckbox: boolean, orbitCheckbox: boolean): void {
    let matchingSatellites: Satellite[] = [];
    searchTerm = searchTerm.toLowerCase();
    for (let i = 0; i < this.sourceList.length; i++) {
      // adjusted for Bonus Mission C search using orbitType and type properties
      let searchMatch: boolean = false;
      if (nameCheckbox) {searchMatch = this.sourceList[i].name.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0};
      if (typeCheckbox) {searchMatch = searchMatch || (this.sourceList[i].type.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0)};
      if (orbitCheckbox) {searchMatch = searchMatch || (this.sourceList[i].orbitType.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0)};
      if (searchMatch) {matchingSatellites.push(this.sourceList[i])};
    }
    if (searchTerm.length > 0) {this.displayList = matchingSatellites}
    else {this.displayList = this.sourceList};
  }

}