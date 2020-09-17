import { Component, Input, OnInit } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-list',
  templateUrl: './orbit-list.component.html',
  styleUrls: ['./orbit-list.component.css']
})
export class OrbitListComponent implements OnInit {

  constructor() { }

  // Second half of Angular Input... app.component.html [satellites]=sourceList is the first half
  @Input() satellites: Satellite[];

  ngOnInit() {
  }

}
