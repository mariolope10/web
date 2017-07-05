import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'conmemorativas-ano',
    styles: [`
        smd-fab-speed-dial {
            position: fixed; 
            bottom: 40px; 
            right: 20px; 
            z-index: 1;
        }`
    ],
    templateUrl: './conmemorativas-ano.component.html',
})
export class ConmemorativasAnoComponent implements OnInit {

    constructor() {}
    
    ngAfterViewInit() {

    }

    ngOnInit(): void {

    }
}
