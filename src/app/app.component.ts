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

  constructor() {
    this.sourceList = [];
    let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';
 
    window.fetch(satellitesUrl).then(function(response) {
       response.json().then(function(data) {
 
          let fetchedSatellites = data.satellites;
          // TODO: loop over satellites
          this.sourceList = fetchedSatellites.map(obj => {
            
            let satObj = new Satellite(
          // TODO: create a Satellite object using new Satellite(fetchedSatellites[i].name, fetchedSatellites[i].type, fetchedSatellites[i].launchDate, fetchedSatellites[i].orbitType, fetchedSatellites[i].operational);
              obj.name,
              obj.type,
              obj.launchDate,
              obj.orbitType,
              obj.operational
            );
          // TODO: add the new Satellite object to sourceList using: this.sourceList.push(satellite);
            return satObj;
          });
 
       }.bind(this));
    }.bind(this));
 }
}