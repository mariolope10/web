import { Component } from '@angular/core';
import { CatalogoService } from './catalogo.service';

import 'styles/font-awesome.scss';

@Component({
  selector: 'my-ui',
  styles: [],
  template: `<router-outlet></router-outlet>`,
  providers: [CatalogoService]
})

export class CatalogoComponent {}
