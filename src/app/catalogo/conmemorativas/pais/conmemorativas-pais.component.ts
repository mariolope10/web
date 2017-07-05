import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'conmemorativas-pais',
    styles: [`
        smd-fab-speed-dial {
        position: fixed; 
        bottom: 40px; 
        right: 20px; 
        z-index: 1;
    }`
    ],
    templateUrl: './conmemorativas-pais.component.html',
})

export class ConmemorativasPaisComponent implements OnInit {

    constructor() {}

    ngAfterViewInit() {
        
    }

    ngOnInit(): void {
        
    }
}
