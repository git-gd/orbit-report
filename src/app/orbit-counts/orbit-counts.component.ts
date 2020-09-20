import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  
  staticSet = new Set();

  constructor() {
  }

  @Input() satellites: Satellite[];

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.staticSet.size < 1 && this.satellites) {this.satellites.forEach(sat => this.staticSet.add(sat.type));}
  }

  getTypes(showZero: boolean) {
    if (showZero) {return this.staticSet}
    let typeSet = new Set();
    this.satellites.forEach(sat => typeSet.add(sat.type));
    return typeSet;
  }

  typeCount(type): number {
    return this.satellites.filter(sat => sat.type === type).length
  }
}
