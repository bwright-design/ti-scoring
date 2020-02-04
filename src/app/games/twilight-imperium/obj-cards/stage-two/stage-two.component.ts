import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'ti-stage-two',
    templateUrl: './stage-two.component.html',
    styleUrls: ['./stage-two.component.scss']
})
export class StageTwoComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    @Input() stageTwoCard;
}
