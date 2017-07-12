import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'filtro-ano-conmemorativas',
    styles: [`
        smd-fab-speed-dial {
            position: fixed; 
            bottom: 40px; 
            right: 20px; 
            z-index: 1;
        }
        h2.article-title {
            padding-top: 30px;
        }
    `
    ],
    templateUrl: './filtro-ano-conmemorativas.component.html'
})
export class FiltroAnoConmemorativasComponent implements OnInit {

    constructor() {}
    
    ngAfterViewInit() {}

    ngOnInit(): void {}
}
