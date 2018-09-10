import { Component, OnInit } from '@angular/core';
import { DossierService } from '../../services/dossier.service';
import { Dossier } from '../../domain/dossier';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dossier',
  templateUrl: './dossier.component.html',
  styleUrls: [ './dossier.component.css' ]
})
export class DossierComponent implements OnInit {

  dossier: Dossier;

  constructor(private dossierService: DossierService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.dossierService.getDossier(id).then(dossier => this.dossier = dossier);
  }

}
