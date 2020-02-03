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

  @Input() stageOneCard;

}
