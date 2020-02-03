import {Component, OnInit, HostListener} from '@angular/core';

@Component({
    selector: 'twilight-imperium',
    templateUrl: './twilight-imperium.component.html',
    styleUrls: ['./twilight-imperium.component.scss']
})

//@HostListener('document:keydown', ['$event'])

export class TwilightImperiumComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
        this.shuffle();
    }

    point = Array;
    cards = Array;
    window = false;
    windowIndex: number;
    windowLevel: number;
    check: boolean = false;
    shuffleIndices: number[] = [];

    addScore() {
        var val = (parseInt(document.getElementById('score-marker').style.left, 10) || 0) + 50;
        document.getElementById('score-marker').style.left = val + 'px';
        console.log('move');
    }

    /* showWindow(i) {
       if (i === 1) {

       } else {
       this.window = !this.window;
       }
     }*/

    showWindow(i: number, level: number) {
        this.windowLevel = level;
        this.windowIndex = i;
        this.window = true;
    }
    hideWindow() {
        this.window = false;
    }

    @HostListener('document:keydown', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent): void {
        if (event.keyCode === 27) {
            this.window = false;
        }
    }

    /*yourfunc(e) {
        if (e.checked) {
            this.addScore();
        }
    }*/

    checkBoxChanged(e, player: string, card: number, level: number) {
        if (e.target.checked == true) {
            this.checked(player, card, level);
        } else {
            //this.unchecked(player, card, level);
        }
    }

    checked(player: string, card: number, level: number) {
        let playerIndex = this.players.findIndex( (i) => {
            return i.color == player;
        });
        if(level == 1) {
            this.players[playerIndex].stageOneObj.push(card);
        } else {
            this.players[playerIndex].stageTwoObj.push(card);
        }
        this.calcScore();
    }

    /*unchecked(player: string, card: number, level: number) {
        let playerIndex = this.players.findIndex( (i) => {
            return i.color == player;
        });
        if(level == 1) {
            this.players[playerIndex].stageOneObj.slice(card);
        } else {
            this.players[playerIndex].stageTwoObj.slice(card);
        }
        this.calcScore();
    }*/

    calcScore() {
        this.players.forEach( (player) => {
            player.totalScore = (player.stageOneObj.length * 1) + (player.stageTwoObj.length * 2) + (player.extraPoints);
        });
    }

    shuffle() {
        /*for(var i = 0; i < 5; i++) {
            this.shuffleIndices.push(Math.floor(Math.random() * 10));
        }*/
        while (this.shuffleIndices.length < 5) {
            let randomIndex: number = Math.floor(Math.random() * 10);
            if (this.shuffleIndices.findIndex((i) => {
                return i == randomIndex
            }) < 0) {
                this.shuffleIndices.push(randomIndex);
            } else {
            }
            console.log(JSON.stringify(this.shuffleIndices));
        }
    }

    // function to check the player if they have that card return to window

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
    ];

    players = [
        {
            color: 'blue',
            stageOneObj: [],
            stageTwoObj: [],
            extraPoints: 0,
            totalScore: 0
        },
        {
            color: 'green',
            stageOneObj: [],
            stageTwoObj: [],
            extraPoints: 0,
            totalScore: 0
        }
    ];

}
