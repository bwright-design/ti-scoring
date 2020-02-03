import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ti-stage-one',
  templateUrl: './stage-one.component.html',
  styleUrls: ['./stage-one.component.scss']
})
export class StageOneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() objOneCards = [
    {
      name: 'Corner the Market',
      condition: 'Control 4 planets that each have the same planet trait',
      points: '1'
    },
    {
      name: 'Develop Weaponry',
      condition: 'Own 2 unit upgrade technologies',
      points: '1'
    },
    {
      name: 'Diversify Research',
      condition: 'Own 2 technologies in each of 2 colors',
      points: '1'
    },
    {
      name: 'Erect a Monument',
      condition: 'Spend 8 resources',
      points: '1'
    },
    {
      name: 'Expand Borders',
      condition: 'Control 6 planets in non-home systems',
      points: '1'
    },
    {
      name: 'Found Research Outposts',
      condition: 'Control 3 planets that have technology specialties',
      points: '1'
    },
    {
      name: 'Intimidate Council',
      condition: 'Have 1 or more ships in 2 systems that are adjacent to Mecatol Rex' + '\u0027' + 's System',
      points: '1'
    },
    {
      name: 'Lead From the Front',
      condition: 'Spend a total of 3 tokens from your tactic and/or strategy pools',
      points: '1'
    },
    {
      name: 'Negotiate Trade Routes',
      condition: 'Spend 5 trade goods',
      points: '1'
    },
    {
      name: 'Sway the Council',
      condition: 'Spend 8 influence',
      points: '1'
    }
  ]

}
