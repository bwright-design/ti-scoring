import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'twilight-imperium',
  templateUrl: './twilight-imperium.component.html',
  styleUrls: ['./twilight-imperium.component.scss']
})

//@HostListener('document:keydown', ['$event'])

export class TwilightImperiumComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  point = Array;
  cards = Array;
  window = false;
  checked: boolean = false;

  addScore() {
    var val = (parseInt(document.getElementById('score-marker').style.left, 10) || 0) + 50;
    document.getElementById('score-marker').style.left = val + 'px';
    console.log('move');
  }

  showWindow(i) {
    if (i === 1) {
      
    } else {
    this.window = !this.window;
    }
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.keyCode === 27) {   
      this.window = false;
    }
  }
  
  yourfunc(e) { 
    if(e.checked){ 
      this.addScore();
    } 
  } 

  objOneCards = [
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
