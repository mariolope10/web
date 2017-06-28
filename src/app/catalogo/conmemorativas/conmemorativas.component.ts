import {Component, ComponentFactoryResolver, ViewChild, ViewContainerRef, ComponentRef} from '@angular/core';

import {ConmemorativasAnoComponent} from "app/catalogo/conmemorativas/conmemorativas-ano.component";
import {ConmemorativasPaisComponent} from "app/catalogo/conmemorativas/conmemorativas-pais.component";

export * from 'app/fab-speed-dial/fab-speed-dial';

const componentsRegistry = {
    'ConmemorativasAnoComponent': ConmemorativasAnoComponent,
    'ConmemorativasPaisComponent': ConmemorativasPaisComponent
};

@Component({
    selector: 'monedas',
    styleUrls: ['./conmemorativas.component.css'],
    templateUrl: './conmemorativas.component.html'
})

export class CatalogoConmemorativasComponent {
    titulo: string;
    
    cmpRef: ComponentRef<Component>;

    @ViewChild('content', {read: ViewContainerRef}) content: ViewContainerRef;

    constructor(private componentFactory: ComponentFactoryResolver) {}

    ngOnInit(): void {
        this.loadConmemorativasAnoComponent();
    }

    loadConmemorativasAnoComponent() {
        this.titulo = "Conmemorativas por año";
        
        if (this.cmpRef) {
            // when the `type` input changes we destroy a previously 
            // created component before creating the new one
            this.cmpRef.destroy();
        }

        let componentClass, componentFactory;
        // Get the actual class for the current component.
        componentClass = componentsRegistry['ConmemorativasAnoComponent'];
        // Get a factory for the current component.
        componentFactory = this.componentFactory.resolveComponentFactory(componentClass);
        // Insert the component at the anchor point.
        this.cmpRef = this.content.createComponent(componentFactory);
    }

    loadConmemorativasPaisComponent() {
        this.titulo = "Conmemorativas por pais";
        
        if (this.cmpRef) {
            // when the `type` input changes we destroy a previously 
            // created component before creating the new one
            this.cmpRef.destroy();
        }
        
        let componentClass, componentFactory;
        // Get the actual class for the current component.
        componentClass = componentsRegistry['ConmemorativasPaisComponent'];
        // Get a factory for the current component.
        componentFactory = this.componentFactory.resolveComponentFactory(componentClass);
        // Insert the component at the anchor point.
        this.cmpRef = this.content.createComponent(componentFactory);
    }
}
