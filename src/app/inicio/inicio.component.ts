import { Component, OnInit } from '@angular/core';
import { NoticiasService } from './inicio.service';

@Component({
  selector: 'my-page-blog',
  styles: [],
  templateUrl: './inicio.component.html',
  providers: [NoticiasService]
})

export class InicioComponent implements OnInit {
  noticias;

  constructor(private noticiasService: NoticiasService) {}

  getNoticias(): void {
    this.noticias = this.noticiasService.getNoticias();
  }

  ngOnInit(): void {
    this.getNoticias();
  }
}
