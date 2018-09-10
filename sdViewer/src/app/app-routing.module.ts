import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DossiersComponent } from 'src/app/dossiers/components/dossiers/dossiers.component';
import { DossierComponent } from './dossiers/components/dossier/dossier.component';

const appRoutes: Routes = [
  { path: 'dossiers/:id', component: DossierComponent },
  { path: 'dossiers', component: DossiersComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
