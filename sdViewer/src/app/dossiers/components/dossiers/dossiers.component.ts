import { Component, OnInit } from '@angular/core';
import { Dossier } from '../../domain/dossier';
import { DossierService } from '../../services/dossier.service';

@Component({
  selector: 'app-dossiers-view',
  templateUrl: './dossiers.component.html',
  styleUrls: ['./dossiers.component.css']
})
export class DossiersComponent implements OnInit {

  dossiers: Dossier[];

  constructor(private dossierService: DossierService) { }

  ngOnInit() {
    this.dossierService.getDossiers().then(dossiers => this.dossiers = dossiers);
  }

}
